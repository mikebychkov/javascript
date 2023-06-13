package service.api.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface EntityService<T, D> {

    D findById(String id);
    List<D> findByExample(Example<T> example);
    Page<D> findAll(Pageable pageable);
    List<D> findAll();
    D save(D dto);
    List<D> saveAll(List<D> dtoList);
    void delete(String id);
    void deleteAll(List<String> ids);
}
