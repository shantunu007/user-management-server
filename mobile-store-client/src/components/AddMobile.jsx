import React from 'react';

const AddMobile = () => {

    const handleAddMobile = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const mobileData = Object.fromEntries(formData.entries())
        console.log(mobileData)

        
    }

    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h2 className='text-4xl font-bold'>add new mobile</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleAddMobile}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-black font-medium">Mobile Name</label>
                        <input type="text" className="input w-full" name='name' placeholder="" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-black font-medium">Brand</label>
                        <input type="text" className="input w-full" name='brand' placeholder="" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-black font-medium">Price</label>
                        <input type="text" className="input w-full" name='price' placeholder="" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label text-black font-medium">Processor</label>
                        <input type="text" className="input w-full" name='processor' placeholder="" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mt-6">
                    <label className="label text-black font-medium">Image URL</label>
                    <input type="text" className="input w-full" name='url' placeholder="" />
                </fieldset>
                <input type="submit" className='btn w-full mt-6' value="Add Mobile" />
            </form>
        </div>
    );
};

export default AddMobile;