package juandaza.movierenter.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;

@Entity
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nombre;
    private String correo;
    private String contrasegna;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasegna() {
        return contrasegna;
    }

    public void setContrasegna(String contrasegna) {
        this.contrasegna = contrasegna;
    }

}
