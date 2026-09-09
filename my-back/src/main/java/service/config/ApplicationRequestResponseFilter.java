package service.config;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;

import java.io.IOException;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

@Log4j2
@Order(0)
@Component
public class ApplicationRequestResponseFilter extends GenericFilterBean {

    private final List<String> logsIgnoredFor = List.of("/actuator/**");

    private final AntPathMatcher pathMatcher = new AntPathMatcher();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        long startTime = System.currentTimeMillis();

        ContentCachingRequestWrapper requestWrapper = requestWrapper(request);
        ContentCachingResponseWrapper responseWrapper = responseWrapper(response);

        filterChain.doFilter(requestWrapper, responseWrapper);

        if (logsIgnoredFor.stream().anyMatch(i -> pathMatcher.match(i, requestWrapper.getRequestURI()))) {
            responseWrapper.copyBodyToResponse();
            return;
        }

        long processingTime = System.currentTimeMillis() - startTime;

        logRequest(requestWrapper);
        logResponse(responseWrapper, processingTime);
    }

    private ContentCachingRequestWrapper requestWrapper(ServletRequest request) {
        if (request instanceof ContentCachingRequestWrapper requestWrapper) {
            return requestWrapper;
        }
        return new ContentCachingRequestWrapper((HttpServletRequest) request);
    }

    private ContentCachingResponseWrapper responseWrapper(ServletResponse response) {
        if (response instanceof ContentCachingResponseWrapper responseWrapper) {
            return responseWrapper;
        }
        return new ContentCachingResponseWrapper((HttpServletResponse) response);
    }

    private void logRequest(ContentCachingRequestWrapper request) {
        var builder = new StringBuilder();
        Map<String, String[]> params = request.getParameterMap();
        builder.append("Request URL").append(request.getRequestURI()).append(" ||| ");
        builder.append("Request params: ");
        params.forEach((key, values) -> builder.append(key).append("=").append(String.join(", ", values)).append("; "));
        builder.append("Request body: ").append(new String(request.getContentAsByteArray()));
        builder.append(headersToString(Collections.list(request.getHeaderNames()), request::getHeader));
        log.info("Request: {}", builder);
    }

    private void logResponse(ContentCachingResponseWrapper response, Long processingTime) throws IOException {
        var builder = new StringBuilder();
        builder.append("Processing time: ").append(processingTime).append("ms\n");
        builder.append(headersToString(response.getHeaderNames(), response::getHeader));
        builder.append("Response body: ").append(new String(response.getContentAsByteArray()));
        log.info("Response: {}", builder);
        response.copyBodyToResponse();
    }

    private String headersToString(Collection<String> headerNames, Function<String, String> headerValueResolver) {
        var builder = new StringBuilder();
        for (String headerName : headerNames) {
            String header = headerValueResolver.apply(headerName);
            builder.append("%s=%s".formatted(headerName, header)).append("\n");
        }
        return builder.toString();
    }
}
