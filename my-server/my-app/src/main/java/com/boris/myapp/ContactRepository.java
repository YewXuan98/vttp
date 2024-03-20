package com.boris.myapp;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.boris.myapp.model.Contact;

public interface ContactRepository extends MongoRepository<Contact, String> {

}
