package pl.m4zek.springjwtrefreshrolemongo;

import pl.m4zek.springjwtrefreshrolemongo.model.Role;
import pl.m4zek.springjwtrefreshrolemongo.payload.request.SignupRequest;
import pl.m4zek.springjwtrefreshrolemongo.service.RoleService;
import pl.m4zek.springjwtrefreshrolemongo.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import java.util.Collections;

@SpringBootApplication
public class SpringJwtRefreshRoleMongoApplication {

    public static final Logger logger = LoggerFactory.getLogger(SpringJwtRefreshRoleMongoApplication.class);


    final UserService userService;


    final RoleService roleService;

    public SpringJwtRefreshRoleMongoApplication(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringJwtRefreshRoleMongoApplication.class, args);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void initDb(){

        logger.info("Initialize data in database");
        Role adminRole = roleService.save(new Role("ADMIN",
                "An Administrator provides office support to either an individual or " +
                        "team and is vital for the smooth-running of a business"));

        Role userRole =  roleService.save(new Role("USER",
                "A user role is a predefined category that can be assigned to " +
                        "users on the basis of their job title or some other criteria"));

        try {
            userService.save(new SignupRequest("Bruce", "Wayne","user@gmai.com","user","password", Collections.singletonList("USER")));
            userService.save(new SignupRequest("Steven", "Johns","admin@gmai.com","admin","password", Collections.singletonList("ADMIN")));
        } catch (Exception e){
            logger.info("Initialize database: {}", e.getMessage());
        }
    }

}
