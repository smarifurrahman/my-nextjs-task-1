const DynamicPage = ({ params }) => {
    // console.log(params);
    return (
        <div>
            <h1>This is dynamic page : {params.id}</h1>
        </div>
    );
};

export default DynamicPage;