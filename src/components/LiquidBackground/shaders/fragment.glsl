precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 mouse = uMouse / uResolution.xy;
    
    // Create base gradient
    vec3 color1 = vec3(0.0, 0.1, 0.2);
    vec3 color2 = vec3(0.1, 0.2, 0.4);
    
    // Time-based movement
    float t = uTime * 0.2;
    
    // Create noise pattern
    vec2 p = uv * 8.0;
    float n = sin(p.x + t) * sin(p.y + t) * 0.4;
    
    // Mouse interaction
    float dist = length(uv - mouse);
    float mouseInfluence = smoothstep(0.5, 0.0, dist) * 0.3;
    
    // Combine effects
    vec3 finalColor = mix(color1, color2, n + mouseInfluence);
    
    // Add subtle glow
    finalColor += vec3(0.1, 0.2, 0.4) * (1.0 - dist) * 0.2;
    
    gl_FragColor = vec4(finalColor, 0.6);
}