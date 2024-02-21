const DynamicPage = ({ params, searchParams }) => {
    // console.log(params);
    console.log(searchParams);
    return (
        <div>
            <h1>This is dynamic page : {params.id}</h1>
            <h2>Searched Category: {searchParams.category}</h2>
            <h2>Searched Price: {searchParams.price}</h2>
        </div>
    );
};

export default DynamicPage;