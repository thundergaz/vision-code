export function Component(params: any) {
    return function(target: any): typeof target {
        console.log(params);
        console.log(target);
        // Object.keys(params).forEach( key => {
        //     target.prototype[key] = params[key]; 
        // })
        return class extends target {
            selector: string = '继承后的内容';
        }
    }
}