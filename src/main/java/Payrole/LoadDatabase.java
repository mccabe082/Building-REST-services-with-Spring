package Payrole;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration // contains beans
class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean // produce a bean for IOC container
    CommandLineRunner initDatabase(EmployeeRepository repository)
    {
        return args -> {
            log.info("Preloading " + repository.save(new Employee("Bilbo Baggins", "burglar")));
            log.info("Preloading " + repository.save(new Employee("Frodo Baggins", "thief")));
        };
    }

    @Bean
    CommandLineRunner append2Database(EmployeeRepository repository)
    {
        return args -> {
            log.info("Preloading " + repository.save(new Employee("David McCabe", "engineer")));
        };
    }
}