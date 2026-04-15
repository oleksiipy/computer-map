const illustrations = {
  monitor: (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="8" width="180" height="110" rx="8" fill="#2a2a3e" stroke="#444466" strokeWidth="2"/>
      <rect x="38" y="16" width="164" height="88" rx="4" fill="#16213e"/>
      <rect x="50" y="28" width="60" height="6" rx="2" fill="#4F6CF7" opacity="0.6"/>
      <rect x="50" y="42" width="90" height="4" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="50" y="52" width="75" height="4" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="50" y="62" width="82" height="4" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="50" y="72" width="65" height="4" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="148" y="28" width="42" height="56" rx="4" fill="rgba(139,92,246,0.15)"/>
      <rect x="152" y="36" width="30" height="4" rx="1" fill="rgba(139,92,246,0.4)"/>
      <rect x="152" y="46" width="22" height="4" rx="1" fill="rgba(139,92,246,0.3)"/>
      <rect x="152" y="56" width="26" height="4" rx="1" fill="rgba(139,92,246,0.2)"/>
      <rect x="155" y="66" width="20" height="4" rx="1" fill="rgba(139,92,246,0.15)"/>
      <rect x="108" y="118" width="24" height="12" rx="2" fill="#333"/>
      <rect x="90" y="128" width="60" height="8" rx="4" fill="#3a3a52"/>
      <circle cx="120" cy="114" r="2.5" fill="#555"/>
    </svg>
  ),
  systemUnit: (
    <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="5" width="140" height="190" rx="8" fill="#3a3a52" stroke="#4a4a5e" strokeWidth="2"/>
      <rect x="20" y="15" width="120" height="80" rx="4" fill="#2a2a3e" stroke="#3a3a52" strokeWidth="1"/>
      <rect x="28" y="22" width="36" height="28" rx="3" fill="#1a1a2e" stroke="#4F6CF7" strokeWidth="1" opacity="0.8"/>
      <text x="46" y="40" textAnchor="middle" fill="#6B83F9" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">CPU</text>
      <rect x="72" y="22" width="28" height="28" rx="3" fill="#1a1a2e" stroke="#A78BFA" strokeWidth="1" opacity="0.8"/>
      <text x="86" y="40" textAnchor="middle" fill="#A78BFA" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">RAM</text>
      <rect x="108" y="22" width="24" height="28" rx="3" fill="#1a1a2e" stroke="#22C55E" strokeWidth="1" opacity="0.8"/>
      <text x="120" y="40" textAnchor="middle" fill="#4ADE80" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">SSD</text>
      <rect x="28" y="58" width="104" height="14" rx="3" fill="#1a1a2e" stroke="#4F6CF7" strokeWidth="1" opacity="0.6"/>
      <text x="80" y="69" textAnchor="middle" fill="#8888aa" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">GPU</text>
      <circle cx="130" cy="98" r="20" fill="#2a2a3e" stroke="#3a3a52" strokeWidth="1.5"/>
      <circle cx="130" cy="98" r="16" fill="#2a2a3e" stroke="#4a4a5e" strokeWidth="1"/>
      <line x1="130" y1="84" x2="130" y2="88" stroke="#4a4a5e" strokeWidth="0.8"/>
      <line x1="130" y1="108" x2="130" y2="112" stroke="#4a4a5e" strokeWidth="0.8"/>
      <line x1="116" y1="98" x2="120" y2="98" stroke="#4a4a5e" strokeWidth="0.8"/>
      <line x1="140" y1="98" x2="144" y2="98" stroke="#4a4a5e" strokeWidth="0.8"/>
      <rect x="88" y="110" width="24" height="6" rx="2" fill="#3a3a52"/>
      <rect x="88" y="120" width="24" height="6" rx="2" fill="#3a3a52"/>
      <rect x="130" y="130" width="14" height="50" rx="2" fill="#555"/>
      <circle cx="28" y="150" r="4" fill="#22C55E" opacity="0.6"/>
      <circle cx="28" cy="150" r="4" fill="#22C55E80"/>
      <circle cx="130" cy="148" r="3" fill="#4F6CF7" opacity="0.4"/>
      <rect x="20" y="170" width="50" height="8" rx="2" fill="#444"/>
      <rect x="20" y="180" width="50" height="4" rx="1" fill="#555"/>
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="40" width="120" height="120" rx="8" fill="#1a1a2e" stroke="#4F6CF7" strokeWidth="2"/>
      <rect x="55" y="55" width="90" height="90" rx="4" fill="#0d0d1a" stroke="#333355" strokeWidth="1"/>
      <text x="100" y="105" textAnchor="middle" fill="#6B83F9" fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif">CPU</text>
      {[30,55,80,105,130,155].map(y => <rect key={`l${y}`} x="35" y={y} width="8" height="6" rx="1" fill="#4a4a5e"/>)}
      {[30,55,80,105,130,155].map(y => <rect key={`r${y}`} x="157" y={y} width="8" height="6" rx="1" fill="#4a4a5e"/>)}
      {[30,55,80,105,130,155].map(x => <rect key={`t${x}`} x={x} y="35" width="6" height="8" rx="1" fill="#4a4a5e"/>)}
      {[30,55,80,105,130,155].map(x => <rect key={`b${x}`} x={x} y="157" width="6" height="8" rx="1" fill="#4a4a5e"/>)}
      <circle cx="70" cy="70" r="3" fill="#4F6CF7" opacity="0.4"/>
      <circle cx="130" cy="70" r="3" fill="#4F6CF7" opacity="0.4"/>
      <rect x="65" y="120" width="70" height="8" rx="2" fill="#1a1a3e" stroke="#333355" strokeWidth="0.5"/>
    </svg>
  ),
  ram: (
    <svg viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="220" height="65" rx="4" fill="#1a8a3a" stroke="#22C55E" strokeWidth="1.5" opacity="0.2"/>
      <rect x="10" y="15" width="220" height="65" rx="4" fill="#2a2a3e" stroke="#A78BFA" strokeWidth="2"/>
      <rect x="25" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="43" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="61" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="79" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="97" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="115" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="133" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="151" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="169" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="187" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="205" y="25" width="12" height="45" rx="2" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <rect x="15" y="72" width="210" height="4" rx="1" fill="#A78BFA" opacity="0.3"/>
      {[20,40,60,80,100,120,140,160,180,200,220].map(x => <rect key={x} x={x} y="82" width="3" height="8" rx="0.5" fill="#C4B5FD" opacity="0.6"/>)}
    </svg>
  ),
  storage: (
    <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="150" height="95" rx="6" fill="#1a1a2e" stroke="#22C55E" strokeWidth="2"/>
      <rect x="25" y="20" width="130" height="75" rx="4" fill="#0d0d1a"/>
      <text x="90" y="55" textAnchor="middle" fill="#4ADE80" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">SSD</text>
      <text x="90" y="70" textAnchor="middle" fill="#8888aa" fontSize="7" fontFamily="Inter, sans-serif">512 GB</text>
      <circle cx="145" cy="30" r="3" fill="#22C55E" opacity="0.5"/>
      <rect x="140" y="40" width="8" height="2" rx="1" fill="#333355"/>
      <rect x="140" y="44" width="8" height="2" rx="1" fill="#333355"/>
      <rect x="25" y="98" width="20" height="5" rx="1" fill="#555"/>
      <rect x="50" y="98" width="8" height="5" rx="1" fill="#555"/>
    </svg>
  ),
  gpu: (
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="20" width="200" height="100" rx="6" fill="#2a2a3e" stroke="#444466" strokeWidth="2"/>
      <rect x="205" y="35" width="30" height="70" rx="4" fill="#333" stroke="#444466" strokeWidth="1.5"/>
      <rect x="208" y="40" width="24" height="14" rx="2" fill="#555"/>
      <rect x="208" y="58" width="24" height="14" rx="2" fill="#555"/>
      <rect x="208" y="76" width="24" height="14" rx="2" fill="#555"/>
      <circle cx="105" cy="70" r="38" fill="#1a1a2e" stroke="#333355" strokeWidth="1.5"/>
      <circle cx="105" cy="70" r="30" fill="#2a2a3e" stroke="#4F6CF7" strokeWidth="1" opacity="0.4"/>
      <circle cx="105" cy="70" r="12" fill="#1a1a2e" stroke="#4a4a5e" strokeWidth="1"/>
      {[0,45,90,135,180,225,270,315].map(angle => {
        const rad = angle * Math.PI / 180;
        const x = 105 + Math.cos(rad) * 20;
        const y = 70 + Math.sin(rad) * 20;
        return <rect key={angle} x={x-2} y={y-2} width="4" height="4" rx="1" fill="#4a4a5e"/>;
      })}
      <rect x="20" y="125" width="14" height="10" rx="2" fill="#555"/>
      <rect x="45" y="125" width="14" height="10" rx="2" fill="#555"/>
      <rect x="70" y="125" width="14" height="10" rx="2" fill="#555"/>
      <rect x="170" y="125" width="8" height="10" rx="2" fill="#555"/>
      <rect x="182" y="125" width="8" height="10" rx="2" fill="#555"/>
      <rect x="194" y="125" width="8" height="10" rx="2" fill="#555"/>
    </svg>
  ),
  keyboard: (
    <svg viewBox="0 0 260 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="5" width="240" height="85" rx="8" fill="#3a3a52" stroke="#4a4a5e" strokeWidth="2"/>
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
        <rect key={`r1-${i}`} x={18 + i * 17.5} y="14" width="14" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      ))}
      {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
        <rect key={`r2-${i}`} x={22 + i * 17.5} y="28" width="14" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      ))}
      <rect x="18" y="42" width="24" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <rect key={`r3-${i}`} x={46 + i * 17.5} y="42" width="14" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      ))}
      <rect x="210" y="42" width="24" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="18" y="56" width="32" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="54" y="56" width="130" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="188" y="56" width="46" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="18" y="70" width="40" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="62" y="70" width="52" height="10" rx="2" fill="#2a2a3e" stroke="#4F6CF780" strokeWidth="0.5"/>
      <rect x="118" y="70" width="40" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="162" y="70" width="14" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="180" y="70" width="14" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="198" y="70" width="14" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="216" y="70" width="16" height="10" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
    </svg>
  ),
  mouse: (
    <svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="95" rx="40" ry="65" fill="#3a3a52" stroke="#4a4a5e" strokeWidth="2"/>
      <ellipse cx="60" cy="95" rx="36" ry="60" fill="#2a2a3e"/>
      <line x1="60" y1="30" x2="60" y2="75" stroke="#4a4a5e" strokeWidth="1.5"/>
      <ellipse cx="60" cy="55" rx="12" ry="18" rx="12" fill="#333" stroke="#4a4a5e" strokeWidth="1" ry="15"/>
      <circle cx="55" cy="50" r="2" fill="#4F6CF7" opacity="0.3"/>
      <circle cx="65" cy="50" r="2" fill="#4F6CF7" opacity="0.3"/>
      <ellipse cx="60" cy="90" rx="4" ry="3" fill="#333" stroke="#4a4a5e" strokeWidth="0.5"/>
      <rect x="56" y="20" width="8" height="5" rx="2" fill="#4a4a5e"/>
      <circle cx="48" cy="140" r="8" fill="#3a3a52"/>
      <circle cx="72" cy="140" r="8" fill="#3a3a52"/>
      <circle cx="60" cy="145" r="6" fill="#3a3a52"/>
    </svg>
  ),
  vonNeumann: (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="80" y="20" width="80" height="50" rx="8" fill="#2a2a3e" stroke="#4F6CF7" strokeWidth="2"/>
      <text x="120" y="50" textAnchor="middle" fill="#6B83F9" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">CPU</text>
      <rect x="80" y="110" width="80" height="40" rx="8" fill="#2a2a3e" stroke="#A78BFA" strokeWidth="2"/>
      <text x="120" y="134" textAnchor="middle" fill="#C4B5FD" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">PAMÄŤ</text>
      <rect x="10" y="30" width="60" height="35" rx="6" fill="#2a2a3e" stroke="#22C55E" strokeWidth="2"/>
      <text x="40" y="52" textAnchor="middle" fill="#4ADE80" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">VSTUP</text>
      <rect x="170" y="30" width="60" height="35" rx="6" fill="#2a2a3e" stroke="#F59E0B" strokeWidth="2"/>
      <text x="200" y="52" textAnchor="middle" fill="#FBBF24" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">VÝSTUP</text>
      <path d="M70 47 L80 47" stroke="#22C55E" strokeWidth="2" markerEnd="url(#arrowG)"/>
      <path d="M160 47 L170 47" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrowO)"/>
      <path d="M120 70 L120 110" stroke="#6B83F9" strokeWidth="2" markerEnd="url(#arrowB)"/>
      <path d="M110 110 L110 75" stroke="#A78BFA" strokeWidth="1.5" markerEnd="url(#arrowP)"/>
      <defs>
        <marker id="arrowG" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#22C55E"/></marker>
        <marker id="arrowO" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#F59E0B"/></marker>
        <marker id="arrowB" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6B83F9"/></marker>
        <marker id="arrowP" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A78BFA"/></marker>
      </defs>
      <text x="120" y="170" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">Von Neumannova architektúra</text>
    </svg>
  ),
  hardware: (
    <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="160" height="110" rx="8" fill="#2a2a3e" stroke="#4F6CF7" strokeWidth="2"/>
      <rect x="30" y="20" width="50" height="35" rx="3" fill="#1a1a2e" stroke="#444466" strokeWidth="1"/>
      <text x="55" y="42" textAnchor="middle" fill="#6B83F9" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">CPU</text>
      <rect x="88" y="20" width="40" height="35" rx="3" fill="#1a1a2e" stroke="#A78BFA" strokeWidth="1"/>
      <text x="108" y="42" textAnchor="middle" fill="#A78BFA" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">RAM</text>
      <rect x="135" y="20" width="35" height="35" rx="3" fill="#1a1a2e" stroke="#22C55E" strokeWidth="1"/>
      <text x="152" y="42" textAnchor="middle" fill="#4ADE80" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">SSD</text>
      <rect x="30" y="62" width="140" height="14" rx="3" fill="#1a1a2e" stroke="#444466" strokeWidth="1"/>
      <text x="100" y="73" textAnchor="middle" fill="#8888aa" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">GPU</text>
      <rect x="140" y="62" width="30" height="14" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="50" y="125" width="100" height="8" rx="4" fill="#3a3a52"/>
      <circle cx="60" cy="150" r="8" fill="#3a3a52" stroke="#4a4a5e" strokeWidth="1"/>
      <circle cx="140" cy="150" r="8" fill="#3a3a52" stroke="#4a4a5e" strokeWidth="1"/>
      <rect x="75" y="125" width="50" height="30" rx="3" fill="#3a3a52" stroke="#4a4a5e" strokeWidth="1"/>
    </svg>
  ),
  software: (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="160" height="120" rx="8" fill="#16213e" stroke="#4F6CF750" strokeWidth="2"/>
      <rect x="30" y="22" width="140" height="16" rx="4" fill="#1a1a2e" stroke="#333355" strokeWidth="0.5"/>
      <circle cx="40" cy="30" r="3" fill="#EF4444"/>
      <circle cx="50" cy="30" r="3" fill="#F59E0B"/>
      <circle cx="60" cy="30" r="3" fill="#22C55E"/>
      <rect x="32" y="46" width="60" height="4" rx="2" fill="#4F6CF7" opacity="0.4"/>
      <rect x="32" y="56" width="90" height="3" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="32" y="64" width="75" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="32" y="72" width="85" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
      <rect x="32" y="80" width="60" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
      <rect x="130" y="46" width="28" height="28" rx="4" fill="rgba(139,92,246,0.15)" stroke="#A78BFA" strokeWidth="0.5"/>
      <rect x="130" y="80" width="28" height="28" rx="4" fill="rgba(79,108,247,0.15)" stroke="#4F6CF7" strokeWidth="0.5"/>
      <text x="144" y="63" textAnchor="middle" fill="#A78BFA80" fontSize="6" fontWeight="600" fontFamily="Inter, sans-serif">APP</text>
      <text x="144" y="97" textAnchor="middle" fill="#4F6CF780" fontSize="6" fontWeight="600" fontFamily="Inter, sans-serif">OS</text>
      <text x="100" y="142" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Inter, sans-serif">Softvér</text>
    </svg>
  ),
  inputDevices: (
    <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="30" width="120" height="80" rx="6" fill="#3a3a52" stroke="#22C55E" strokeWidth="1.5"/>
      {[0,1,2,3,4,5,6,7,8,9,10].map(i => <rect key={`k1-${i}`} x={16 + i * 10} y="38" width="8" height="6" rx="1" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>)}
      {[0,1,2,3,4,5,6,7,8,9].map(i => <rect key={`k2-${i}`} x={20 + i * 10} y="47" width="8" height="6" rx="1" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>)}
      <rect x="16" y="56" width="24" height="6" rx="1" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      {[0,1,2,3,4,5].map(i => <rect key={`k3-${i}`} x={43 + i * 10} y="56" width="8" height="6" rx="1" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>)}
      <rect x="96" y="56" width="24" height="6" rx="1" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="16" y="65" width="30" height="6" rx="1" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <rect x="50" y="65" width="40" height="6" rx="1" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
      <ellipse cx="180" cy="70" rx="22" ry="35" fill="#3a3a52" stroke="#22C55E" strokeWidth="1.5"/>
      <line x1="180" y1="38" x2="180" y2="55" stroke="#4a4a5e" strokeWidth="1"/>
      <ellipse cx="180" cy="50" rx="5" ry="8" fill="#333" stroke="#4a4a5e" strokeWidth="0.5"/>
      <path d="M138 70 L158 70" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="3,2"/>
      <path d="M62 110 L62 128" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="3,2"/>
      <path d="M62 128 L180 128 L180 105" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="3,2"/>
      <text x="110" y="8" textAnchor="middle" fill="#22C55E" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif">VSTUPNÉ ZARIADENIA</text>
    </svg>
  ),
  outputDevices: (
    <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="10" width="110" height="70" rx="6" fill="#2a2a3e" stroke="#F59E0B" strokeWidth="1.5"/>
      <rect x="35" y="15" width="100" height="55" rx="3" fill="#16213e"/>
      <rect x="42" y="24" width="30" height="4" rx="1.5" fill="#4F6CF7" opacity="0.5"/>
      <rect x="42" y="33" width="45" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="42" y="39" width="35" height="2" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="42" y="45" width="40" height="2" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="85" y="24" width="42" height="30" rx="3" fill="rgba(139,92,246,0.15)"/>
      <rect x="85" y="82" width="30" height="6" rx="2" fill="#333"/>
      <rect x="70" y="86" width="60" height="4" rx="2" fill="#3a3a52"/>
      <rect x="155" y="50" width="45" height="60" rx="6" fill="#3a3a52" stroke="#F59E0B" strokeWidth="1.5"/>
      <rect x="160" y="56" width="35" height="40" rx="3" fill="#2a2a3e"/>
      <rect x="168" y="62" width="20" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
      <rect x="168" y="68" width="15" height="2" rx="1" fill="rgba(255,255,255,0.15)"/>
      <rect x="165" y="104" width="25" height="4" rx="1" fill="#555"/>
      <circle cx="177" cy="44" r="3" fill="#F59E0B" opacity="0.5"/>
      <path d="M85 86 L85 100" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3,2"/>
      <path d="M85 100 L177 100 L177 110" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3,2"/>
      <text x="110" y="132" textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif">VÝSTUPNÉ ZARIADENIA</text>
    </svg>
  ),
  printer: (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="40" width="160" height="70" rx="8" fill="#3a3a52" stroke="#4a4a5e" strokeWidth="2"/>
      <rect x="40" y="10" width="120" height="10" rx="2" fill="#eee" stroke="#ccc" strokeWidth="0.5"/>
      <rect x="40" y="50" width="120" height="16" rx="4" fill="#2a2a3e"/>
      <rect x="35" y="110" width="130" height="40" rx="3" fill="#eee" stroke="#ccc" strokeWidth="1"/>
      <rect x="50" y="120" width="100" height="3" rx="1" fill="#ccc"/>
      <rect x="50" y="126" width="80" height="3" rx="1" fill="#ccc"/>
      <rect x="50" y="132" width="90" height="3" rx="1" fill="#ccc"/>
      <rect x="50" y="138" width="70" height="3" rx="1" fill="#ddd"/>
      <circle cx="155" cy="48" r="4" fill="#22C55E" opacity="0.6"/>
      <circle cx="140" cy="48" r="4" fill="#4F6CF7" opacity="0.4"/>
      <rect x="60" y="30" width="30" height="8" rx="2" fill="#2a2a3e" stroke="#444466" strokeWidth="0.5"/>
    </svg>
  ),
};

export default illustrations;