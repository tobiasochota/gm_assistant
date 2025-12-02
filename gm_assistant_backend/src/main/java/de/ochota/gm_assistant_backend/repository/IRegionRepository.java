package de.ochota.gm_assistant_backend.repository;

import de.ochota.gm_assistant_backend.model.Region;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IRegionRepository extends MongoRepository<Region, String> {
}