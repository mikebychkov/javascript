package service.api.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import service.config.exceptionhandling.exceptions.EntityNotFound;

import java.util.List;
import java.util.Optional;

public class EntityServiceImpl<T extends Entity<D>, D extends EntityDTO<T>> implements EntityService<T, D> {

    private final MongoRepository<T, String> repository;

    public EntityServiceImpl(MongoRepository<T, String> repository) {
        this.repository = repository;
    }

    @Override
    public D findById(String id) {

        return repository.findById(id)
                .map(T::toDto)
                .orElseThrow(EntityNotFound::new);
    }
    @Override
    public List<D> findByExample(Example<T> example) {

        return repository.findAll(example)
                .stream()
                .map(T::toDto)
                .toList();
    }
    @Override
    public Page<D> findAll(Pageable pageable) {

        return repository.findAll(pageable)
                .map(T::toDto);
    }
    @Override
    public List<D> findAll() {

        return repository.findAll()
                .stream()
                .map(T::toDto)
                .toList();
    }
    @Override
    public D save(D dto) {

        return Optional.of(repository.save(dto.toEntity()))
                .map(T::toDto)
                .orElseThrow();
    }
    @Override
    public List<D> saveAll(List<D> dtoList) {

        return repository.saveAll(
                        dtoList.stream()
                                .map(D::toEntity)
                                .toList()
                )
                .stream()
                .map(T::toDto)
                .toList();
    }

    @Override
    public void delete(String id) {

        repository.deleteById(id);
    }

    @Override
    public void deleteAll(List<String> ids) {

        repository.deleteAllById(ids);
    }
}
