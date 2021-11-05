export function JSONstringify(json: any) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, '\t')
    }

    let arr = [],
        _string = 'color:green',
        _number = 'color:darkorange',
        _boolean = 'color:blue',
        _null = 'color:magenta',
        _key = 'color:red'

    json = json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        function (match: any) {
            let style = _number
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    style = _key
                } else {
                    style = _string
                }
            } else if (/true|false/.test(match)) {
                style = _boolean
            } else if (/null/.test(match)) {
                style = _null
            }
            arr.push(style)
            arr.push('')
            return '%c' + match + '%c'
        }
    )

    arr.unshift(json)

    /* eslint-disable prefer-spread */
    console.log.apply(console, arr)
}

export const sleep = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(undefined)
        }, ms)
    })
}

export function roughSizeOfObject(object: any) {
    var objectList = []
    var stack = [object]
    var bytes = 0

    while (stack.length) {
        var value = stack.pop()

        if (typeof value === 'boolean') {
            bytes += 4
        } else if (typeof value === 'string') {
            bytes += value.length * 2
        } else if (typeof value === 'number') {
            bytes += 8
        } else if (typeof value === 'object' && objectList.indexOf(value) === -1) {
            objectList.push(value)

            for (var i in value) {
                stack.push(value[i])
            }
        }
    }
    return bytes
}

export const isEmptyObject = (obj: Record<string, any>) => {
    return Object.getOwnPropertyNames(obj).length === 0
}
