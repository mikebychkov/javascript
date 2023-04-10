package js.backend.dao.callme;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CallMeServiceImpl implements CallMeService {

    private final CallMeRepository callMeRepository;

    @Override
    public CallMeDTO save(CallMeDTO dto) {

        CallMe callMe = CallMe.of(dto);
        return callMeRepository.save(callMe).toDTO();
    }

    @Override
    public CallMeDTO findById(String id) {

        return callMeRepository.findById(id)
                .map(CallMe::toDTO)
                .orElseThrow();
    }

    @Override
    public List<CallMeDTO> findAll() {

        return callMeRepository.findAll()
                .stream()
                .map(CallMe::toDTO)
                .toList();
    }
}
