import logo from "./assets/paisa.jpg";


const user = {
  imageUrl: './paisa.png',//'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

function Card()
{
    return (
        <>
            <div className="card">
                <img src={logo} />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quis quibusdam voluptatibus dolor velit aspernatur distinctio perspiciatis praesentium.</p>
            </div>
        </>
    )
}

export default Card;

