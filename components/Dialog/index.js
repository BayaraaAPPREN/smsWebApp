

export default function Dialog(){
    return(
        <div>
           <label for="my-modal-5" className="bg-lime-500 rounded-lg py-2 px-8 text-white hover:bg-lime-700 cursor-pointer modal-button">Захиалга өгөх</label>

            <input type="checkbox" id="my-modal-5" className="modal-toggle"/>
            <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <div className="modal-action">
                  <label for="my-modal-5" className="bg-lime-500 rounded-lg py-2 px-8 text-white hover:bg-lime-700 cursor-pointer modal-button">X</label>
                </div>
                <div>
                    <div>
                        <h1>Нөхцлийн код</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}