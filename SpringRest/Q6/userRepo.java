package com.mongoRest.Assignment.domain;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepo extends MongoRepository<users,String> {

}
