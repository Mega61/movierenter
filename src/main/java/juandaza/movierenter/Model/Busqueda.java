package juandaza.movierenter.Model;

public class Busqueda {

    private String correo;
    private String contrasegna;

    public Busqueda(){
        
    }

    public Busqueda(String correo, String contrasegna) {
        this.correo = correo;
        this.contrasegna = contrasegna;
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
