package pl.m4zek.springjwtrefreshrolemongo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import pl.m4zek.springjwtrefreshrolemongo.model.Role;

public interface RoleRepository extends MongoRepository<Role, String> {

    Role findByName(String name);

    Boolean existsByName(String name);

}
