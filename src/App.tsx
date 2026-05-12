/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  ChevronLeft, 
  Zap, 
  Database, 
  Cpu, 
  Smartphone, 
  Users, 
  Target, 
  ArrowRight,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  X,
  PieChart as PieIcon,
  Leaf
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from "recharts";

type SlideContent = {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  accent?: string;
};

const Slide3Solution = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const accuracyData = [
    { name: 'MobileNetV2', value: 88 },
    { name: 'MobileNetV3-S', value: 92 },
    { name: 'ResNet50', value: 95 },
  ];

  const speedData = [
    { name: 'MobileNetV3-S', value: 0.8 },
    { name: 'MobileNetV2', value: 8.5 },
    { name: 'YOLOv5n', value: 12.2 },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 h-full items-center overflow-y-auto lg:overflow-visible">
        <div className="md:col-span-8 flex flex-col justify-center space-y-4 md:space-y-6 lg:space-y-8 2xl:space-y-12">
          <div className="space-y-2 md:space-y-4 2xl:space-y-8">
             <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-7xl font-black text-white uppercase italic tracking-tighter">Planned Intelligence.</h3>
             <p className="text-sm md:text-base lg:text-lg 2xl:text-3xl font-bold text-[#E0E7E1] leading-relaxed opacity-80 italic">
                We aren't just picking any model. We have identified **MobileNetV3-Small**, a highly optimized **Convolutional Neural Network (CNN)**, as our primary candidate—offering the best balance of accuracy and extreme efficiency for real-time detection on entry-level hardware.
             </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:gap-6 relative z-10 2xl:gap-12">
             <motion.div 
               layoutId="arch-box"
               onClick={() => setActiveModal('arch')}
               className="p-4 md:p-6 2xl:p-12 bg-[#1B2919] rounded-2xl md:rounded-3xl border border-[#2D452B] relative overflow-hidden group cursor-pointer hover:border-[#76E082] transition-colors"
             >
                <div className="text-[8px] md:text-[10px] 2xl:text-xl font-black text-[#76E082] uppercase mb-1 flex items-center justify-between">
                  Proposed Architecture
                  <BarChart3 size={12} className="opacity-50 2xl:size-10" />
                </div>
                <div className="text-base md:text-xl lg:text-2xl 2xl:text-5xl font-black text-white italic">MobileNetV3-S</div>
                <Cpu size={24} className="md:size-10 2xl:size-24 absolute -right-1 -bottom-1 text-[#76E082]/10 group-hover:scale-125 transition-transform" />
             </motion.div>
             <motion.div 
               layoutId="acc-box"
               onClick={() => setActiveModal('acc')}
               className="p-4 md:p-6 2xl:p-12 bg-[#76E082] rounded-2xl md:rounded-3xl relative overflow-hidden group cursor-pointer hover:bg-white transition-colors"
             >
                <div className="text-[8px] md:text-[10px] 2xl:text-xl font-black text-black/60 uppercase mb-1 flex items-center justify-between">
                  Target Accuracy
                  <BarChart3 size={12} className="opacity-50 2xl:size-10" />
                </div>
                <div className="text-base md:text-xl lg:text-2xl 2xl:text-5xl font-black text-black italic">90%+ Predicted</div>
                <Target size={24} className="md:size-10 2xl:size-24 absolute -right-1 -bottom-1 text-black/10 group-hover:scale-125 transition-transform" />
             </motion.div>
          </div>
        </div>
        
        <div className="md:col-span-4 h-full flex flex-col justify-center gap-4 md:gap-6 2xl:gap-16 relative z-10 py-4 md:py-0">
           <motion.div 
             layoutId="speed-box"
             onClick={() => setActiveModal('speed')}
             className="p-4 md:p-6 lg:p-8 2xl:p-16 bg-[#1B2919] rounded-2xl md:rounded-3xl border-r-4 md:border-r-8 2xl:border-r-[16px] border-[#76E082] space-y-1 md:space-y-2 2xl:space-y-6 cursor-pointer hover:bg-[#253822] transition-colors shadow-xl"
           >
              <div className="text-[8px] md:text-[10px] 2xl:text-2xl font-black text-[#76E082] uppercase tracking-[0.2em] italic flex items-center justify-between">
                Target Speed
                <BarChart3 size={12} className="opacity-50 2xl:size-10" />
              </div>
              <div className="text-3xl md:text-5xl lg:text-6xl 2xl:text-9xl font-black text-white italic tracking-tighter">&lt;1<span className="text-[10px] 2xl:text-2xl ml-1">ms</span></div>
              <p className="text-[8px] 2xl:text-2xl font-bold text-gray-500 uppercase italic">Planned real-time processing on mobile CPUs</p>
           </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="absolute inset-0 bg-[#0C120B]/90 z-50 flex items-center justify-center p-12 backdrop-blur-md"
          >
            {activeModal === 'acc' && (
              <motion.div layoutId="acc-box" className="bg-[#76E082] w-full max-w-3xl rounded-3xl p-8 text-black shadow-[0_0_50px_rgba(118,224,130,0.3)]" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h4 className="text-3xl font-black uppercase tracking-tighter italic">Accuracy Benchmark</h4>
                    <p className="text-sm font-bold opacity-70">Projected MobileNetV3-S vs Alternatives</p>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="hover:opacity-50"><X size={32} /></button>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={accuracyData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                      <XAxis type="number" domain={[0, 100]} hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: 'black', fontWeight: 'bold' }} />
                      <Tooltip cursor={{fill: 'rgba(0,0,0,0.1)'}} contentStyle={{ backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '8px' }} />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                        {accuracyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.name === 'MobileNetV3-S' ? '#000' : 'rgba(0,0,0,0.3)'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}

            {activeModal === 'speed' && (
              <motion.div layoutId="speed-box" className="bg-[#1B2919] border border-[#2D452B] shadow-[0_0_50px_rgba(0,0,0,0.8)] w-full max-w-3xl rounded-3xl p-8" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h4 className="text-3xl font-black text-white uppercase tracking-tighter italic">Inference Latency (ms)</h4>
                    <p className="text-sm font-bold text-[#76E082]">Lower is better for edge devices</p>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-white"><X size={32} /></button>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={speedData} margin={{ top: 30, right: 0, left: -20, bottom: 0 }}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12, fontWeight: 'bold' }} />
                      <YAxis hide />
                      <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '8px' }} />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={60}>
                        {speedData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.name === 'MobileNetV3-S' ? '#76E082' : '#2D452B'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}

            {activeModal === 'arch' && (
              <motion.div layoutId="arch-box" className="bg-[#1B2919] border border-[#76E082] shadow-[0_0_50px_rgba(118,224,130,0.15)] w-full max-w-3xl rounded-3xl p-8 text-white relative overflow-hidden" onClick={e => e.stopPropagation()}>
                <div className="absolute top-0 right-0 p-8 opacity-10"><Cpu size={200} /></div>
                <div className="flex justify-between items-start relative z-10">
                  <div className="max-w-xl">
                    <h4 className="text-4xl font-black uppercase tracking-tighter italic text-[#76E082] mb-4">MobileNetV3-Small</h4>
                    <p className="text-xl font-bold opacity-90 mb-6 italic">Why this specific architecture?</p>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                      <li className="flex gap-3"><CheckCircle2 className="text-[#76E082] shrink-0" size={20}/> Uses Hardware-Aware Network Search (NAS) to optimize for mobile CPUs.</li>
                      <li className="flex gap-3"><CheckCircle2 className="text-[#76E082] shrink-0" size={20}/> Incorporates Squeeze-and-Excitation (SE) modules for better feature representation without heavy compute penalties.</li>
                      <li className="flex gap-3"><CheckCircle2 className="text-[#76E082] shrink-0" size={20}/> Hard-swish activation functions improve precision at extreme low-latency.</li>
                    </ul>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-white"><X size={32} /></button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Slide4Data = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const breakdownData = [
    { name: 'Priority Grasses', value: 50, color: '#76E082' },
    { name: 'High-Protein Legumes', value: 50, color: '#ffffff' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 h-full items-center relative z-10 overflow-y-auto lg:overflow-visible pb-4 py-4 md:py-0">
        <div className="md:col-span-5 flex flex-col gap-4 md:gap-6 2xl:gap-12">
          <div className="p-4 md:p-8 2xl:p-16 rounded-2xl md:rounded-3xl bg-white text-black relative shadow-2xl md:skew-x-3 transition-transform hover:skew-x-0">
            <div className="text-[10px] md:text-xs 2xl:text-2xl font-black uppercase tracking-widest mb-1">Planned Source</div>
            <div className="text-xl md:text-3xl 2xl:text-6xl font-black italic tracking-tighter mb-2 md:mb-4 leading-none uppercase">Visayas State <br/>University</div>
            <p className="text-sm md:text-lg 2xl:text-3xl font-bold opacity-70 italic tracking-tight">Direct field imagery collection.</p>
          </div>
          <motion.div 
            layoutId="samples-box"
            onClick={() => setActiveModal('samples')}
            className="p-4 md:p-8 2xl:p-16 rounded-2xl md:rounded-3xl bg-[#1B2919] border border-[#2D452B] cursor-pointer hover:border-[#76E082] transition-all group"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-[10px] md:text-xs 2xl:text-2xl font-black text-[#76E082] uppercase tracking-widest">Target Samples</div>
              <PieIcon size={14} className="text-[#76E082] opacity-50 group-hover:opacity-100 transition-opacity 2xl:size-10" />
            </div>
            <div className="text-4xl md:text-7xl 2xl:text-9xl font-black text-white italic leading-none tracking-tighter">5,000+</div>
            <div className="h-1.5 md:h-2 2xl:h-4 w-full bg-[#1B1B1B] mt-4 md:mt-6 2xl:mt-10 rounded-full overflow-hidden">
              <div className="h-full w-[10%] bg-[#76E082]" />
            </div>
          </motion.div>
        </div>
        
        <div className="md:col-span-7 md:pl-12 2xl:pl-24 space-y-6 md:space-y-12 2xl:space-y-24">
            <div className="space-y-2 md:space-y-4 2xl:space-y-10">
              <h3 className="text-2xl md:text-4xl 2xl:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">A planned library of <span className="text-[#76E082]">endemic species.</span></h3>
              <p className="text-sm md:text-lg 2xl:text-3xl font-bold text-gray-400 italic">Data will come from field captures, historischen records, and manual expert verification.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 2xl:gap-12">
              <div className="flex items-center gap-3 md:gap-4 2xl:gap-8">
                  <div className="w-1.5 md:w-2 2xl:w-4 h-10 md:h-12 2xl:h-24 bg-[#76E082]" />
                  <div>
                    <div className="text-[10px] md:text-sm 2xl:text-2xl font-black text-white">PRIORITY GRASSES</div>
                    <div className="text-[8px] md:text-[10px] 2xl:text-xl font-mono text-gray-500">Planned: Energy focus</div>
                  </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4 2xl:gap-8">
                  <div className="w-1.5 md:w-2 2xl:w-4 h-10 md:h-12 2xl:h-24 bg-white" />
                  <div>
                    <div className="text-[10px] md:text-sm 2xl:text-2xl font-black text-white">TROPICAL LEGUMES</div>
                    <div className="text-[8px] md:text-[10px] 2xl:text-xl font-mono text-gray-400">Planned: Protein focus</div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="absolute inset-0 bg-[#0C120B]/90 z-50 flex items-center justify-center p-12 backdrop-blur-md"
          >
            {activeModal === 'samples' && (
              <motion.div layoutId="samples-box" className="bg-[#1B2919] border border-[#76E082] shadow-[0_0_50px_rgba(118,224,130,0.15)] w-full max-w-3xl rounded-3xl p-8 text-white relative flex" onClick={e => e.stopPropagation()}>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-3xl font-black text-white uppercase tracking-tighter italic">Dataset Breakdown</h4>
                  </div>
                  <p className="text-sm font-bold text-[#76E082] mb-8">5,000+ Planned Entries Distribution</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-[#76E082]" />
                      <div>
                        <div className="text-lg font-black italic">50% Priority Grasses</div>
                        <div className="text-xs text-gray-400 font-medium">Napier, Guinea, Para Grass, etc.</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-white" />
                      <div>
                        <div className="text-lg font-black italic">50% Tropical Legumes</div>
                        <div className="text-xs text-gray-400 font-medium">Centrosema, Stylo, Pinto Peanut, etc.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-64 h-64 relative">
                  <button onClick={() => setActiveModal(null)} className="absolute -top-4 -right-4 text-gray-400 hover:text-white z-10"><X size={32} /></button>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={breakdownData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {breakdownData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '8px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Slide5Impact = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const impactData = [
    { t: "Economic Impact", id: "economic", icon: <BarChart3 size={20} className="text-[#76E082]" />, d: "Boosts farmer income by optimizing cattle weight gain via better nutrition." },
    { t: "Bias Prevention", id: "bias", icon: <Target size={20} className="text-[#76E082]" />, d: "Dataset includes diverse lighting and weather conditions to avoid false negatives." },
    { t: "Privacy", id: "privacy", icon: <Smartphone size={20} className="text-[#76E082]" />, d: "100% on-device processing. No farmer data ever leaves the phone." }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 h-full items-center relative z-10 overflow-y-auto lg:overflow-visible">
        <div className="md:col-span-6 space-y-4 md:space-y-8 2xl:space-y-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-8xl font-black text-white italic uppercase tracking-tighter mb-4 md:mb-8 leading-none">Ethical <br /><span className="text-[#76E082]">Precision.</span></h3>
          <div className="grid grid-cols-1 gap-3 md:gap-4 2xl:gap-8">
             {impactData.map((item, i) => (
               <motion.div 
                 layoutId={`impact-box-${item.id}`}
                 key={i} 
                 onClick={() => setActiveModal(item.id)}
                 className="flex gap-4 md:gap-6 2xl:gap-10 p-4 md:p-6 2xl:p-10 bg-[#1B2919] border border-[#2D452B] rounded-2xl relative overflow-hidden group cursor-pointer hover:border-[#76E082] transition-colors"
               >
                  <div className="text-2xl md:text-3xl 2xl:text-6xl font-black text-white/5 absolute -top-1 -left-1 italic">0{i+1}</div>
                  <div className="relative z-10 flex gap-3 md:gap-4 2xl:gap-8 items-center">
                    <div className="shrink-0 scale-100 2xl:scale-150">{item.icon}</div>
                    <div>
                      <div className="text-[10px] 2xl:text-2xl font-black text-[#76E082] uppercase mb-1 italic tracking-widest">{item.t}</div>
                      <p className="text-[10px] md:text-sm 2xl:text-2xl font-bold text-gray-400 leading-tight italic">{item.d}</p>
                    </div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
        
        <div className="md:col-span-12 lg:col-span-6 md:pl-12 flex items-center justify-center relative py-8 md:py-0">
           <div className="absolute inset-x-0 inset-y-0 bg-[#76E082]/5 blur-3xl rounded-full" />
           <motion.div 
             layoutId="ethical-badge"
             onClick={() => setActiveModal('ethical')}
             className="relative p-8 md:p-12 2xl:p-24 bg-white text-black rounded-3xl md:rounded-[40px] shadow-2xl transform hover:rotate-0 rotate-3 transition-transform cursor-pointer group max-w-[320px] md:max-w-none"
           >
              <CheckCircle2 size={48} className="md:size-16 2xl:size-32 mb-4 md:mb-6 text-[#76E082] group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-4xl 2xl:text-7xl font-black tracking-tighter leading-none italic uppercase mb-2">ETHICAL PRECISION</div>
              <p className="text-[8px] md:text-sm 2xl:text-2xl font-bold opacity-60 uppercase tracking-widest">Designed for the real world</p>
           </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="absolute inset-0 bg-[#0C120B]/90 z-50 flex items-center justify-center p-12 backdrop-blur-md"
          >
            {activeModal === 'economic' && (
              <motion.div layoutId="impact-box-economic" className="bg-[#1B2919] border border-[#76E082] shadow-[0_0_50px_rgba(118,224,130,0.15)] w-full max-w-3xl rounded-3xl p-8 text-white relative" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <BarChart3 className="text-[#76E082]" size={32} />
                       <h4 className="text-3xl font-black uppercase tracking-tighter italic">Economic Impact</h4>
                    </div>
                    <p className="text-sm font-bold opacity-70">Direct positive outputs for the livestock industry</p>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-white"><X size={32} /></button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0C120B] p-6 rounded-2xl border border-[#2D452B]">
                    <div className="text-5xl font-black text-[#76E082] italic mb-2 tracking-tighter">+ Yield</div>
                    <p className="text-sm text-gray-400 font-bold">Instantly identify high-protein legumes to optimize cow weight and milk production.</p>
                  </div>
                  <div className="bg-[#0C120B] p-6 rounded-2xl border border-[#2D452B]">
                    <div className="text-5xl font-black text-white italic mb-2 tracking-tighter">- Loss</div>
                    <p className="text-sm text-gray-400 font-bold">Cut down on manual errors and time spent identifying, allowing more herd management focus.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeModal === 'bias' && (
              <motion.div layoutId="impact-box-bias" className="bg-[#1B2919] border border-[#76E082] shadow-[0_0_50px_rgba(118,224,130,0.15)] w-full max-w-3xl rounded-3xl p-8 text-white" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <Target className="text-[#76E082]" size={32} />
                       <h4 className="text-3xl font-black uppercase tracking-tighter italic">Bias Prevention</h4>
                    </div>
                    <p className="text-sm font-bold opacity-70">Training models with resilience</p>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-white"><X size={32} /></button>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center bg-[#0C120B] p-4 rounded-xl border border-[#2D452B]">
                    <CheckCircle2 className="text-[#76E082]" />
                    <span className="font-bold text-gray-300">Dataset includes low-res camera variations</span>
                  </div>
                  <div className="flex gap-4 items-center bg-[#0C120B] p-4 rounded-xl border border-[#2D452B]">
                    <CheckCircle2 className="text-[#76E082]" />
                    <span className="font-bold text-gray-300">Images taken across dry and wet seasons</span>
                  </div>
                  <div className="flex gap-4 items-center bg-[#0C120B] p-4 rounded-xl border border-[#2D452B]">
                    <CheckCircle2 className="text-[#76E082]" />
                    <span className="font-bold text-gray-300">Resilient against glare and poor lighting</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeModal === 'privacy' && (
              <motion.div layoutId="impact-box-privacy" className="bg-[#1B2919] border border-[#76E082] shadow-[0_0_50px_rgba(118,224,130,0.15)] w-full max-w-3xl rounded-3xl p-8 text-white" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <Smartphone className="text-[#76E082]" size={32} />
                       <h4 className="text-3xl font-black uppercase tracking-tighter italic">Absolute Privacy</h4>
                    </div>
                    <p className="text-sm font-bold opacity-70">Keeping the farmer's data under their control</p>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-white"><X size={32} /></button>
                </div>
                <div className="text-center p-12 bg-black/40 rounded-2xl border border-dashed border-[#2D452B]">
                  <h5 className="text-6xl font-black text-white italic tracking-tighter mb-4">100% OFFLINE</h5>
                  <p className="text-xl font-medium text-gray-400 max-w-lg mx-auto">
                    Because inference runs locally on the edge device, no pictures, GPS locations, or farm statistics are ever uploaded to a central server.
                  </p>
                </div>
              </motion.div>
            )}
            
            {activeModal === 'ethical' && (
              <motion.div layoutId="ethical-badge" className="bg-white text-black shadow-[0_0_80px_rgba(255,255,255,0.2)] w-full max-w-2xl rounded-[40px] p-12 text-center" onClick={e => e.stopPropagation()}>
                <button onClick={() => setActiveModal(null)} className="absolute top-8 right-8 text-gray-400 hover:text-black"><X size={32} /></button>
                <CheckCircle2 size={80} className="mx-auto mb-6 text-[#76E082]" />
                <h4 className="text-5xl font-black uppercase tracking-tighter italic mb-4">Designed for<br/>The Real World</h4>
                <p className="text-lg font-bold opacity-70 leading-relaxed">
                  We don't build tech for labs. We build tech for the mud, the rain, and the heat. An AI model is only good if it works out in the field, exactly where the farmer stands.
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const slides: SlideContent[] = [
    {
      id: "title",
      title: "Title & Team",
      subtitle: "Project Proposal | Team DTG",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-4 md:space-y-6 lg:space-y-8 overflow-y-auto lg:overflow-visible py-4 md:py-0">
          <div className="relative">
            <div className="text-[60px] md:text-[100px] lg:text-[140px] font-black text-[#76E082] leading-none tracking-tighter italic uppercase opacity-20 absolute -top-8 md:-top-12 lg:-top-16 inset-x-0 select-none">
              DTG
            </div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative z-10 space-y-1 md:space-y-2"
            >
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none uppercase italic text-white mb-2 md:mb-4">
                Forage.AI
              </h1>
              <p className="text-[10px] md:text-sm lg:text-xl font-bold tracking-tight text-[#E0E7E1] uppercase bg-[#1B2919] px-4 md:px-6 py-1 md:py-2 inline-block rounded-lg shadow-xl mb-4 md:mb-8">
                A Proposed CNN-Based Real-Time Forage Classifier
              </p>
            </motion.div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 w-full max-w-6xl pt-4 md:pt-6 lg:pt-8 border-t border-[#2D452B]">
            {[
              { name: "Radz Ponce Moreno", role: "Industry Lead" },
              { name: "Red Kyle", role: "Ethics and Risk Officer" },
              { name: "Jerome Daniel Sta. Agata", role: "UX Lead" },
              { name: "Rayan Mamadaya", role: "Tech Strategist" },
              { name: "Monarch Asis", role: "Creatives" },
              { name: "Aj Kent Bustamante", role: "Tech Strategist" },
              { name: "Ervin James Caballes", role: "Ethics and Risk Officer" },
            ].map((m, i) => (
              <div key={i} className="p-2 md:p-3 lg:p-4 bg-[#1B2919] rounded-lg md:rounded-xl border border-[#2D452B] w-[140px] md:w-[180px] lg:w-[260px]">
                <div className="text-[#76E082] font-black italic uppercase text-[8px] md:text-[9px] lg:text-[11px] mb-0.5 md:mb-1 leading-tight">{m.name}</div>
                <div className="text-[6px] md:text-[8px] lg:text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-tight">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "painpoint",
      title: "Industry Pain Point",
      subtitle: "The Cost of Manual Misidentification",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center h-full overflow-y-auto lg:overflow-visible py-4 md:py-0">
          <div className="md:col-span-7 space-y-4 md:space-y-6 lg:space-y-10">
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
                The visual <br />
                <span className="text-[#76E082]">barrier.</span>
              </h2>
              <div className="bg-[#1B2919] p-4 md:p-6 lg:p-8 rounded-2xl border-l-4 md:border-l-8 border-[#76E082] space-y-2 md:space-y-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#76E082]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#76E082]">User Story</span>
                </div>
                <p className="text-base md:text-xl lg:text-2xl font-bold text-[#E0E7E1] leading-tight italic">
                  "As a livestock farmer, I spend too much time manually identifying high-protein forage, which results in poor nutrition and financial loss."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 md:p-4 rounded-xl bg-white/5 border border-[#2D452B]">
                <div className="text-[8px] md:text-[10px] font-black uppercase text-[#76E082] mb-1">Negative Outcome</div>
                <div className="text-xs md:text-base lg:text-lg font-bold text-white uppercase italic">Lower Meat & Yields</div>
              </div>
              <div className="p-3 md:p-4 rounded-xl bg-white/5 border border-[#2D452B]">
                <div className="text-[8px] md:text-[10px] font-black uppercase text-[#76E082] mb-1">Critical Stat</div>
                <div className="text-xs md:text-base lg:text-lg font-bold text-white uppercase italic">90% Manual Error</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative h-full flex items-center justify-center">
             <div className="absolute inset-0 bg-[#76E082]/10 blur-3xl rounded-full" />
             <div className="relative w-full aspect-square bg-white rounded-3xl border border-[#2D452B] flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 text-center shadow-2xl group transition-transform hover:scale-105">
                <AlertCircle size={32} className="md:size-16 lg:size-20 text-red-500 mb-2 md:mb-4 lg:mb-6 animate-pulse" />
                <div className="text-xl md:text-3xl lg:text-4xl font-black text-black leading-none tracking-tighter italic uppercase">Bottleneck</div>
                <div className="text-[8px] md:text-[10px] font-mono text-black/40 uppercase tracking-[0.3em] font-black mt-2 md:mt-4 italic">High Expert Dependency</div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: "solution",
      title: "The AI Solution",
      subtitle: "Our Proposed Neural Classifier",
      content: <Slide3Solution />
    },
    {
      id: "data",
      title: "Data Strategy",
      subtitle: "Building the Novel Dataset",
      content: <Slide4Data />
    },
    {
      id: "impact",
      title: "Impact & Ethics",
      subtitle: "Driving Sustainable Industry Change",
      content: <Slide5Impact />
    },
    {
      id: "conclusion",
      title: "Conclusion",
      subtitle: "Our Future Vision",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-4 md:space-y-8 2xl:space-y-20">
          <div className="max-w-5xl 2xl:max-w-7xl space-y-4 md:space-y-8 2xl:space-y-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-7xl 2xl:text-9xl font-black text-white italic uppercase tracking-tighter leading-tight md:leading-[0.9]">
              Empowering every farmer with <span className="text-[#76E082]">high-precision AI.</span>
            </h2>
            
            <div className="bg-[#1B2919] p-6 md:p-12 2xl:p-24 rounded-2xl md:rounded-3xl border border-[#2D452B] relative shadow-2xl overflow-hidden w-full max-w-4xl 2xl:max-w-6xl">
               <div className="absolute top-0 right-0 p-4 2xl:p-12">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Smartphone size={24} className="md:size-10 2xl:size-24 text-[#76E082]/20" />
                  </motion.div>
               </div>
               <p className="text-lg md:text-4xl 2xl:text-7xl font-black text-[#76E082] tracking-tighter italic uppercase leading-tight">
                 "Our tool will secure the future of Philippine livestock, one plant at a time."
               </p>
            </div>
            
            <div className="pt-2 md:pt-4 2xl:pt-12">
              <button 
                onClick={() => setCurrentSlide(0)}
                className="px-6 py-3 md:px-8 md:py-4 2xl:px-20 2xl:py-10 bg-[#76E082] text-black font-black uppercase text-[10px] md:text-sm 2xl:text-3xl tracking-[0.3em] rounded-full hover:bg-white transition-all transform hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(118,224,130,0.4)]"
              >
                Back to Start
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "attribution",
      title: "Built with AI",
      subtitle: "Development Tools",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-6 md:space-y-12">
          <div className="max-w-4xl space-y-4 md:space-y-8 flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#76E082] rounded-2xl md:rounded-3xl flex items-center justify-center text-black shadow-[0_0_50px_rgba(118,224,130,0.3)] mb-2 md:mb-4">
              <Cpu size={32} />
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
              Powered by <span className="text-[#76E082]">Google AI Studio</span>
            </h2>
            <p className="text-lg md:text-2xl font-bold text-[#E0E7E1] italic opacity-80 max-w-2xl px-4">
              This interactive presentation was developed using Google AI Studio's agentic capabilities, 
              optimizing layout, interactivity, and content for a high-impact technical pitch.
            </p>
            <div className="pt-4 md:pt-8">
              <button 
                onClick={() => setCurrentSlide(0)}
                className="px-8 py-4 md:px-12 md:py-6 bg-[#76E082] text-black font-black uppercase text-[10px] md:text-sm tracking-[0.3em] rounded-full hover:bg-white transition-all transform hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(118,224,130,0.4)]"
              >
                Back to Start
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "prototype",
      title: "Live Prototype",
      subtitle: "Experience the Solution",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-6 md:space-y-12 2xl:space-y-24 overflow-y-auto md:overflow-visible py-4 md:py-0">
          <div className="max-w-4xl 2xl:max-w-7xl space-y-4 md:space-y-8 2xl:space-y-16 flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 2xl:w-48 2xl:h-48 bg-[#76E082] rounded-2xl md:rounded-3xl 2xl:rounded-[4rem] flex items-center justify-center text-black shadow-[0_0_50px_rgba(118,224,130,0.3)] mb-2 md:mb-4">
              <Leaf size={32} className="2xl:size-24" />
            </div>
            <h2 className="text-3xl md:text-6xl 2xl:text-9xl font-black text-white italic uppercase tracking-tighter leading-none">
              Explore the <span className="text-[#76E082]">Prototype</span>
            </h2>
            <p className="text-lg md:text-2xl 2xl:text-5xl font-bold text-[#E0E7E1] italic opacity-80 max-w-2xl 2xl:max-w-5xl px-4">
              Scan the QR code or click the link below to experience the real-time crop classification tool in action.
            </p>
            
            <div className="flex flex-col items-center gap-6 md:gap-8 2xl:gap-16 lg:flex-row lg:items-start">
              <div className="bg-white p-3 md:p-4 2xl:p-10 rounded-2xl 2xl:rounded-[3rem] shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_60px_rgba(118,224,130,0.3)] transition-all">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://forage-steel.vercel.app/&bgcolor=ffffff&color=000000" 
                  alt="QR Code for Prototype" 
                  className="w-32 h-32 md:w-40 md:h-40 2xl:w-[350px] 2xl:h-[350px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex flex-col items-center lg:items-start justify-center h-full">
                <div className="bg-[#1B2919] p-4 md:p-8 2xl:p-16 rounded-2xl md:rounded-3xl 2xl:rounded-[3rem] border border-[#2D452B] hover:border-[#76E082] transition-colors group h-fit">
                  <a 
                    href="https://forage-steel.vercel.app/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-2xl md:text-4xl 2xl:text-7xl font-black text-[#76E082] tracking-tighter italic uppercase underline decoration-2 2xl:decoration-4 underline-offset-8 transition-all hover:text-white"
                  >
                    forage-steel.vercel.app
                  </a>
                </div>
                <div className="mt-2 2xl:mt-6 text-[#76E082] font-mono text-[8px] md:text-[10px] 2xl:text-2xl tracking-[0.3em] uppercase italic opacity-50">
                  Click to open or scan QR
                </div>
              </div>
            </div>

            <div className="pt-4 md:pt-8 2xl:pt-16 pb-4">
              <button 
                onClick={() => setCurrentSlide(0)}
                className="px-8 py-4 md:px-12 md:py-6 2xl:px-24 2xl:py-12 bg-[#76E082] text-black font-black uppercase text-[10px] md:text-sm 2xl:text-3xl tracking-[0.3em] rounded-full hover:bg-white transition-all transform hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(118,224,130,0.4)]"
              >
                Back to Start
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      className="min-h-screen bg-[#0C120B] text-[#E0E7E1] font-sans selection:bg-[#76E082]/30 overflow-hidden flex items-center justify-center p-4 touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Brutalist Frame */}
      <div className="w-full max-w-[2000px] min-h-[600px] 2xl:min-h-[800px] 3xl:min-h-[1000px] h-fit lg:h-auto lg:aspect-video bg-[#0C120B] border-4 md:border-8 2xl:border-[16px] border-[#1B2919] relative flex flex-col overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        
        {/* Header (from Design) */}
        <header className="flex justify-between items-end px-6 md:px-12 2xl:px-20 pt-6 md:pt-12 2xl:pt-16 pb-4 md:pb-8 2xl:pb-12 border-b border-[#2D452B] z-10">
          <div className="flex flex-col">
            <span className="text-[#76E082] font-mono text-[8px] md:text-[10px] 2xl:text-base tracking-[0.4em] uppercase mb-1 md:mb-3 font-black italic">
              {slides[currentSlide].subtitle}
            </span>
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
              <div className="w-8 h-8 md:w-10 md:h-10 2xl:w-16 2xl:h-16 bg-[#76E082] rounded flex items-center justify-center text-black text-xl md:text-2xl 2xl:text-4xl font-black italic">F</div>
              <h1 className="text-3xl md:text-6xl 2xl:text-8xl font-black tracking-tighter leading-none uppercase italic text-white line-clamp-1">
                Forage.AI
              </h1>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-sm md:text-xl 2xl:text-3xl font-bold leading-tight uppercase tracking-tighter">
              CNN-Based Real-Time<br />
              <span className="text-[#76E082]">Crop Classification</span>
            </p>
          </div>
        </header>

        {/* Slide Viewport */}
        <main className="flex-grow relative px-6 md:px-12 2xl:px-20 pt-4 md:pt-12 2xl:pt-16 pb-2 md:pb-4 overflow-y-auto lg:overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="h-full"
            >
              <div className="h-full">
                 {slides[currentSlide].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer (from Design) */}
        <footer className="px-6 md:px-12 2xl:px-20 py-4 md:py-8 2xl:py-16 border-t border-[#2D452B] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 z-10 bg-[#0C120B]">
          <div className="flex gap-4 md:gap-8 2xl:gap-20 text-[8px] md:text-[10px] 2xl:text-2xl font-mono tracking-[0.3em] font-black opacity-30">
            <span>CNN CLASSIFIER</span>
            <div className="w-1 h-1 2xl:w-3 2xl:h-3 bg-white rounded-full self-center hidden md:block" />
            <span className="hidden md:block">PRECISION AGRI</span>
            <div className="w-1 h-1 2xl:w-3 2xl:h-3 bg-white rounded-full self-center hidden md:block" />
            <span className="hidden md:block">DEEP LEARNING</span>
          </div>
          
          <div className="flex items-center gap-3 md:gap-6 2xl:gap-16">
            <div className="flex gap-1 md:gap-1.5 2xl:gap-4 h-1 2xl:h-3">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-full transition-all duration-300 ${i === currentSlide ? "w-6 md:w-8 2xl:w-24 bg-[#76E082]" : "w-2 md:w-3 2xl:w-6 bg-[#1B2919]"}`}
                />
              ))}
            </div>
            
            <div className="flex gap-1 md:gap-2 2xl:gap-4">
              <button 
                onClick={prevSlide}
                className="w-8 h-8 md:w-10 md:h-10 2xl:w-20 2xl:h-20 border border-[#2D452B] flex items-center justify-center hover:bg-[#1B2919] transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} className="2xl:size-10" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-8 h-8 md:w-10 md:h-10 2xl:w-20 2xl:h-20 bg-[#76E082] flex items-center justify-center text-black hover:bg-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={16} className="2xl:size-10" />
              </button>
            </div>
            
            <div className="text-right text-[8px] md:text-[10px] 2xl:text-xl font-mono uppercase tracking-[0.2em] text-[#76E082] font-black pl-4 2xl:pl-10 border-l border-[#2D452B] hidden sm:block">
              SECURE THE FUTURE<br />OF FORAGE
            </div>
          </div>
        </footer>

        {/* Background "AI" Branding */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-center overflow-hidden">
           <div className="text-[500px] font-black italic tracking-tighter select-none">FORAGE</div>
        </div>
      </div>
    </div>
  );
}

