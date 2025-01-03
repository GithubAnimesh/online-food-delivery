const Contact = () => {
  return (
    <div className="m-10 font-bold">
      <h1>Contact US page</h1>
      <form>
        <input
          className="border border-black m-2 p-2"
          type="text"
          placeholder="name"
        ></input>
        <input
          className="border border-black m-2 p-2"
          type="text"
          placeholder="massage"
        ></input>
        <button className="bg-black text-white rounded font-bold m-2 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
