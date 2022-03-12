import { useState } from "react";
import { ImSearch } from "react-icons/im";
// import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";
import propTypes from "prop-types";
import { Header, Form,Input, Button, ButtonLabel } from "./Searchbar.styled";

export default function Searchbar({onSubmit}) {
    const [search, setSearch] = useState('');

    const handleChange = event => {
        const { value } = event.currentTarget;
        const searchQuery = value.toLowerCase();
        setSearch(searchQuery);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (search.trim() === '') {
            return alert('please, enter search value!');
        };

        onSubmit(search);
        setSearch('');
    };

    return (
        <Header>
            <Form onSubmit={handleSubmit}>
                <Input
                    onChange={handleChange}
                    value={search}
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
};

Searchbar.propTypes = {
    onSubmit: propTypes.func.isRequired
};

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