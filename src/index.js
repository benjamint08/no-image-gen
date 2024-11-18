import {Hono} from "hono";
import { cors } from 'hono/cors'
import {serve} from "@hono/node-server";
import {createCanvas} from "canvas";

const colors = [
    {
        textColor: '#FFFFFF',
        backgroundColor: '#000000'
    },
    {
        textColor: '#000000',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FF0000',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#FF0000'
    },
    {
        textColor: '#008000',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#008000'
    },
    {
        textColor: '#0000FF',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#0000FF'
    },
    {
        textColor: '#FFFF00',
        backgroundColor: '#000000'
    },
    {
        textColor: '#000000',
        backgroundColor: '#FFFF00'
    },
    {
        textColor: '#800080',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#800080'
    },
    {
        textColor: '#FFA500',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#FFA500'
    },
    {
        textColor: '#FFC0CB',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#FFC0CB'
    },
    {
        textColor: '#A52A2A',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#A52A2A'
    },
    {
        textColor: '#808080',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#808080'
    },
    {
        textColor: '#00FFFF',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#00FFFF'
    },
    {
        textColor: '#FF00FF',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#FF00FF'
    },
    {
        textColor: '#008080',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#008080'
    },
    {
        textColor: '#E6E6FA',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#E6E6FA'
    },
    {
        textColor: '#800000',
        backgroundColor: '#FFFFFF'
    },
    {
        textColor: '#FFFFFF',
        backgroundColor: '#800000'
    },
    {
        textColor: '#000080',
        backgroundColor: '#FFFFFF'
    }
];

const toBoolean = (val) => {
    if(val === 'true'){
        return true;
    } else if(val === 'false'){
        return false;
    }
    return val;
}

const app = new Hono();
app.use('*', cors())

app.get('/:resolution', async (c) => {
    let res = c.req.param('resolution');
    let resX = res.split('x')[0];
    let resY = res.split('x')[1];
    resX = parseInt(resX);
    resY = parseInt(resY);
    let text = c.req.query('text');
    let spaces = toBoolean(c.req.query('spaces'));
    let trim = toBoolean(c.req.query('trim'));
    let split = text.split(' ');
    let desiredText = '';
    for(let i = 0; i < split.length; i++){
        let firstLetter = split[i].charAt(0);
        desiredText += firstLetter;
        if(i < split.length - 1 && spaces){
            desiredText += ' ';
        }
    }
    if(!trim){
        desiredText = text
    }
    let canvas = createCanvas(resX, resY);
    let ctx = canvas.getContext('2d');
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillStyle = randomColor.backgroundColor;
    ctx.fillRect(0, 0, resX, resY);
    ctx.fillStyle = randomColor.textColor;
    let textSize = (resX + resY) / 10;
    ctx.font = `${textSize}px Arial`;
    let textWidth = ctx.measureText(desiredText).width;
    let textHeight = 60;
    let x = (resX - textWidth) / 2;
    let y = (resY - textHeight)/1.7 + textSize/5;
    await ctx.fillText(desiredText, x, y);
    let buffer = await canvas.toBuffer('image/png');
    c.header('Content-Type', 'image/png');
    return c.body(buffer);
})

// Start server
console.log('Server running at http://localhost:8080/')
serve({
    fetch: app.fetch,
    port: 8080
})