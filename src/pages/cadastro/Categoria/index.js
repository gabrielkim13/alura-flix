import React from "react";

import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>New category</h1>

            <form>
                <label>
                    Name:
                    <input type="text" />
                </label>

                <button>Add category</button>
            </form>

            <Link to="/">Home</Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
