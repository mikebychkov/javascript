package service.api.service.entity;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface EntityService<T> {

    T findById(String id);
    List<T> findByExample(Example<T> example);

    Page<T> findAll(Pageable pageable);
}
