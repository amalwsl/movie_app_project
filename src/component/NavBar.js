import { Navbar,Nav,Button,Form,FormControl } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";




function NavBar({setSearch,setSearchRate}){
    const ratingChanged = (newRating) => {
        setSearchRate(newRating);
      };

return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
    <Nav className="mr-auto">
      
    </Nav>
    <Form inline>
    <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
    />
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e=>setSearch(e.target.value)} />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
)
}

export default NavBar;