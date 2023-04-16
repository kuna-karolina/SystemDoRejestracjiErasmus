package pl.m4zek.springjwtrefreshrolemongo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import pl.m4zek.springjwtrefreshrolemongo.model.RefreshToken;
import pl.m4zek.springjwtrefreshrolemongo.model.User;

import java.util.Optional;

public interface RefreshTokenRepository extends MongoRepository<RefreshToken, String> {
    void deleteByUser(User user);

    Optional<RefreshToken> findByToken(String token);

    boolean existsByUser(User user);
}
