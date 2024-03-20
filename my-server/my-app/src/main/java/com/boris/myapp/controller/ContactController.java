package com.boris.myapp.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletResponse;

import com.boris.myapp.ContactRepository;
import com.boris.myapp.model.Contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class ContactController {
    @Autowired // spring will create an object for you and it will map it
    ContactRepository repo;

    @ApiIgnore
    @RequestMapping(value = "/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");

    }


    @GetMapping("/contacts")
    public List<Contact> getAllContacts() {
        return repo.findAll();
    }

    @PostMapping("/contacts")
    public Contact addContact(@RequestBody Contact contact) {
        //TODO: process POST request
        return repo.save(contact);
    }

}
