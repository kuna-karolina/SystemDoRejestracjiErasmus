package pl.m4zek.springjwtrefreshrolemongo.service;

import org.springframework.stereotype.Service;
import pl.m4zek.springjwtrefreshrolemongo.model.Role;
import pl.m4zek.springjwtrefreshrolemongo.repository.RoleRepository;


@Service
public class RoleService {

    private final RoleRepository repository;

    public RoleService(RoleRepository repository) {
        this.repository = repository;
    }

    public Role save(Role role) {
        if(!repository.existsByName(role.getName())){
            Role newRole = new Role(role.getName(), role.getDescription());
            return repository.save(newRole);
        }
        return null;
    }
}
