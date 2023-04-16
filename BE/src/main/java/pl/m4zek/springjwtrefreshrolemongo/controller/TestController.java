package pl.m4zek.springjwtrefreshrolemongo.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.m4zek.springjwtrefreshrolemongo.payload.response.MessageResponse;


@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/all/")
    public ResponseEntity<?> allAccess(){
        return ResponseEntity.ok(new MessageResponse("All Access"));
    }

    @GetMapping("/user/")
    public ResponseEntity<?> userAccess(){
        return ResponseEntity.ok(new MessageResponse("USER Access"));
    }

    @GetMapping("/admin/")
    public ResponseEntity<?> adminAccess(){
        return ResponseEntity.ok(new MessageResponse("ADMIN Access"));
    }

}
