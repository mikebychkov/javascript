package service.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import service.api.dao.email.EmailCard;
import service.api.dao.email.EmailRepository;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SchedulerService {

    private final EmailRepository emailRepository;

    @Scheduled(cron = "${cron.delete-old-emails}")
    public void deleteOldEmails() {

        LocalDate date = LocalDate.now().minusMonths(1);

        List<EmailCard> oldEmails = emailRepository.findEmailsOlderThenDate(date);

        emailRepository.deleteAll(oldEmails);
    }
}
