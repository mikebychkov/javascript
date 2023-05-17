package service.api.service.entity;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import service.api.entity.Skill;
import service.api.repo.SkillRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService {

    private final SkillRepository skillRepository;

    @Override
    public Skill findById(String id) {

        return skillRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Skill> findByExample(Example<Skill> example) {

        return skillRepository.findAll(example);
    }

    @Override
    public Page<Skill> findAll(Pageable pageable) {

        return skillRepository.findAll(pageable);
    }
}
