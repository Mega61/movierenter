package juandaza.movierenter.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import juandaza.movierenter.Model.Cliente;
import juandaza.movierenter.Model.Pelicula;
import juandaza.movierenter.Repository.RepoCliente;
import juandaza.movierenter.Repository.RepoPelicula;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "/api")
public class ControllerCliente {

    @Autowired
    private RepoCliente repoCliente;

    @Autowired
    private RepoPelicula repoPelicula;

    public ControllerCliente(RepoCliente repoCliente, RepoPelicula repoPelicula) {
        this.repoCliente = repoCliente;
        this.repoPelicula = repoPelicula;
    }

    @GetMapping("peliculas")
    public List<Pelicula> getPeliculas(){
        return this.repoPelicula.findAll();
    }

    @GetMapping("users")
    public List<Cliente> getClientes(){
        return this.repoCliente.findAll();
    }

    /*@PostMapping(path = "/add")
    public @ResponseBody String addCliente(@RequestParam String nombre, @RequestParam String correo,
            @RequestParam String contrasegna) {

        Cliente cliente = new Cliente();

        cliente.setNombre("Juan");
        cliente.setCorreo("Juan@gmail.com");
        cliente.setContrasegna("juan12345");
        repoCliente.save(cliente);

        return "Se ha guardado el cliente" + cliente.getNombre();

    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Cliente> getAllClientes(){
        return repoCliente.findAll();
    }

    /*
     * @GetMapping public java.util.List<Cliente> getClientes() { return
     * repoCliente.findAll(); }
     * 
     * @GetMapping public Cliente getCliente(@PathVariable Long id) { return
     * repoCliente.findById(id).orElseThrow(RuntimeException::new); }
     */

}
