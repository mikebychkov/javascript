package service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServiceApplication {

	// TODO: RETRIEVE AND SEND EMAILS BY SCHEDULE
	// - https://www.baeldung.com/spring-email

	public static void main(String[] args) {
		SpringApplication.run(ServiceApplication.class, args);
	}
}
