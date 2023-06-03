class EventEmitter {
    
    constructor() {
        this.sub = new Map();
    }
    
    subscribe(event, cb) {

        if(this.sub.has(event)) {
            this.sub.get(event).push(cb);
        } else {
            this.sub.set(event,[cb]);
        }

        return {
            unsubscribe: () => {
                //Just remove the cb
                const newArr = this.sub.get(event).filter(f => f !== cb);
                if(newArr.length === 0) {
                    this.sub.delete(event);
                } else {
                    this.sub.set(event,newArr);
                }
            }
        };
    }

    emit(event, args = []) {
        if(!this.sub.has(event)) return [];
        return this.sub.get(event).map(f => f(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */