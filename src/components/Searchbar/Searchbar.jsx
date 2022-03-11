import { useState } from "react";
import { ImSearch } from "react-icons/im";
// import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";
// import propTypes from "prop-types";
import { Header, Form,Input, Button, ButtonLabel } from "./Searchbar.styled";

export default function Searchbar({onSubmit}) {
    const [image, setImage] = useState('')

    const handleChange = event => {
        const searchQuery = event.currentTarget.value.toLowerCase();
        setImage(searchQuery);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (image.trim() === '') {
            return alert('please, enter search value!');
        };

        onSubmit({image});
        setImage('');
    };

    return (
        <Header>
            <Form onSubmit={handleSubmit}>
                <Input
                    onChange={handleChange}
                    value={image}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />

                <Button type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    <ButtonLabel>Search</ButtonLabel>
                </Button>
            </Form>
        </Header>
    )
}


// export class Searchbar extends Component {

//     state = {
//         imageName: '',
//     };

    // handleNameChange = event => {
    //     this.setState({ imageName: event.currentTarget.value.toLowerCase() })
    // };

    // handleSubmit = event => {
    //     event.preventDefault();

    //     if (this.state.imageName.trim() === '') {
    //         return alert('please, enter search value!');
    //     };

    //     this.props.onSubmit(this.state.imageName);
    //     this.setState({ imageName: '' });
    // };

//     render() {
//         return (
            // <Header>
            //     <Form onSubmit={this.handleSubmit}>
            //         <Input
            //             onChange={this.handleNameChange}
            //             value={this.state.imageName}
            //             type="text"
            //             autoComplete="off"
            //             autoFocus
            //             placeholder="Search images and photos"
            //         />

            //         <Button type="submit">
            //             <ImSearch style={{ marginRight: 8 }} />
            //             <ButtonLabel className="button-label">Search</ButtonLabel>
            //         </Button>
            //     </Form>
            // </Header>
//         )
//     };
// };