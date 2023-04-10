package js.backend.dao.callme;

import java.util.List;

public interface CallMeService {

    CallMeDTO save(CallMeDTO dto);
    CallMeDTO findById(String id);
    List<CallMeDTO> findAll();
}
