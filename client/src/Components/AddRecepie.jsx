import React, { useState } from 'react';

function AddRecepie() {
    const [recipe, setRecipe] = useState({
        name: '',
        categoryId: '',
        userId: '',
        body: '',
        photo: null,
        coverImage: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'photo' || name === 'coverImage') {
            const file = e.target.files[0];
            setRecipe((prevRecipe) => ({
                ...prevRecipe,
                [name]: file,
            }));
        } else {
            setRecipe((prevRecipe) => ({
                ...prevRecipe,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form gönderme veya doğrulama işlemlerini burada gerçekleştirin
        // State değerlerini kullanın: recipe.name, recipe.categoryId, recipe.userId, recipe.body, recipe.photo, recipe.coverImage

        // Form alanlarını sıfırlama
        setRecipe({
            name: '',
            categoryId: '',
            userId: '',
            body: '',
            photo: null,
            coverImage: null,
        });
    };

    return (
        <div className='my-10'>
            <h1 className='text-3xl text-center mb-5'>Add Your Recepie</h1>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label>
                    Recepie Name:
                    <input
                        type="text"
                        name="name"
                        value={recipe.name}
                        onChange={handleChange}
                        className='p-2  border-2 w-full rounded-md outline-none my-2'
                        required
                    />
                </label>

                <label>
                    Catyegory:
                    <br />
                    <select
                        name="categoryId"
                        value={recipe.categoryId}
                        onChange={handleChange}
                        className='p-2 bg-cyan-400 rounded-md text-white my-2 outline-none'
                        required
                    >
                        <option value="">Sellect Category</option>

                        <option value="kategori1">Kategori 1</option>
                        <option value="kategori2">Kategori 2</option>

                    </select>
                </label>


                <label>
                    Description:
                    <textarea
                        name="body"
                        value={recipe.body}
                        onChange={handleChange}
                        required
                        rows={8}
                        className='p-2  border-2 w-full rounded-md outline-none my-2 resize-none'
                    ></textarea>
                </label>
                <div className="add__recepie__photo flex my-2">
                    <label>
                        Photo:
                        <br />
                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Cover Photo:
                        <br />
                        <input
                            type="file"
                            name="coverImage"
                            accept="image/*"
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <br />
                <button type="submit" className='bg-cyan-300 text-white rounded-lg p-3 text-xl'>Add</button>
            </form>
        </div>
    );
}

export default AddRecepie;
