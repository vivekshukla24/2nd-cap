package com.mongoRest.Assignment.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class userController {
    private final userRepo ur;
    @Autowired
    public userController(userRepo ur) {
        this.ur = ur;
    }

    @GetMapping("/users")
    public List<users> getAll(){
        return ur.findAll();
    }
    @PostMapping("/users")
    public void addUser(@RequestBody users e){
        ur.save(e);
    }

    @GetMapping("/users/{id}")
    public users findone(@PathVariable String id){
        return ur.findById(id).get();
    }
    @DeleteMapping("/users/{id}")
    public String delUser(@PathVariable String id){
        ur.deleteById(id);
        return "Employee deletion completed Successfully";
    }
    @PutMapping("/users")
    public users updateUser(@RequestBody users e){
        users existingUser=ur.findById(e.getUserid()).orElse(null);
        existingUser.setUsername(e.getUsername());
        existingUser.setOrderNumber(e.getOrderNumber());
        existingUser.setOrderQuantity(e.getOrderQuantity());
        return ur.save(existingUser);
    }
}
