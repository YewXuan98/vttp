package com.boris.myapp.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Contacts")
public class Contact {
    private String name;
    private String email;
    private String message;


    public Contact(String name, String email, String message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }



    @Override
    public String toString() {
        return "{" +
            " name='" + getName() + "'" +
            ", email='" + getEmail() + "'" +
            ", message='" + getMessage() + "'" +
            "}";
    }
    
}
