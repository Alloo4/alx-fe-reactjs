import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '2px solid #ddd', borderRadius: '8px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Current Count: {count}</p>
            <button 
                onClick={() => setCount(count + 1)}
                style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Increment
            </button>
            <button 
                onClick={() => setCount(count - 1)}
                style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Decrement
            </button>
            <button 
                onClick={() => setCount(0)}
                style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;

