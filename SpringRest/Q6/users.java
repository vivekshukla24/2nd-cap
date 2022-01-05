package com.mongoRest.Assignment.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class users {

    @Id
    private String userid;
    private String username;
    private String orderNumber;
    private String orderQuantity;

    public users() {
    }

    public users(String username, String orderNumber, String orderQuantity) {
        this.username = username;
        this.orderNumber = orderNumber;
        this.orderQuantity = orderQuantity;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getOrderQuantity() {
        return orderQuantity;
    }

    public void setOrderQuantity(String orderQuantity) {
        this.orderQuantity = orderQuantity;
    }

    @Override
    public String toString() {
        return "users{" +
                "userid='" + userid + '\'' +
                ", username='" + username + '\'' +
                ", orderNumber='" + orderNumber + '\'' +
                ", orderQuantity='" + orderQuantity + '\'' +
                '}';
    }
}
