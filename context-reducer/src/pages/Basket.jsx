import { useContext } from 'react';
import { Cartcontext } from '../store/Context';

const Basket = () => {
  const GlobalState = useContext(Cartcontext);
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  //   const total = state.reduce((total, item)=>{
  // return total = item.quantity * item.price}, 0)

  let total = 0;
  state.map((item) => (total += item.quantity * item.price));
  return (
    <div>
      <div className="container mx-auto">
        {state.map((item, index) => {
          console.log(item);
          return (
            <div key={index} className="flex gap-7  items-center mb-4">
              <img src={item.image} alt={item.title} className="w-[50px]" />
              <h2>{item.title}</h2>
              <p className="bg-purple-300 text-lg p-1">
                Price:${item.price * item.quantity}
              </p>
              <div className="flex gap-2">
                <p
                  onClick={() => dispatch({ type: 'INCREASE', payload: item })}
                  className="bg-purple-500 px-2 py-1"
                >
                  +
                </p>
                <p className="bg-orange-400 p-2">{item.quantity}</p>
                <p
                  onClick={() => dispatch({ type: 'DECREASE', payload: item })}
                  className="bg-purple-500 px-2 py-1"
                >
                  -
                </p>
              </div>

              <button
                className="bg-red-400 px-2 py-1 rounded-md"
                onClick={() => dispatch({ type: 'REMOVE', payload: item })}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <h3 className="bg-slate-500 p-3 text-white text-right font-semibold">
        Total Amout: ${total.toFixed(2)}
      </h3>
    </div>
  );
};

export default Basket;
