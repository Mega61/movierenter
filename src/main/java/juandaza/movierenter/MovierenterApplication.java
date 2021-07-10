package juandaza.movierenter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import juandaza.movierenter.Model.Cliente;
import juandaza.movierenter.Repository.RepoCliente;

@SpringBootApplication
public class MovierenterApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(MovierenterApplication.class, args);
	}

	@Autowired
	private RepoCliente repoCliente;

	@Override
	public void run(String... args) throws Exception {
		
		// this.repoCliente.save(new Cliente("Juan", "Juan@gmail.com", "123454"));
		// this.repoCliente.save(new Cliente("Dani", "Dani@gmail.com", "123454"));
		// this.repoCliente.save(new Cliente("Toby", "Toby@gmail.com", "123454"));
		
	}

}
