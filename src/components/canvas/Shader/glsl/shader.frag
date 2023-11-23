uniform float time;
uniform vec3 color;
varying vec2 vUv;

#pragma glslify:random=require(glsl-random)

void main(){
    gl_FragColor.rgba=vec4(.5+.3*sin(vUv.yxx+time)+color,1.);
    // gl_FragColor.rgba=vec4(vec3(random(gl_FragCoord.xy/vUv.xy)),1.);
    // gl_FragColor.rgba = vec4(vec3(0.), 1.);
}
