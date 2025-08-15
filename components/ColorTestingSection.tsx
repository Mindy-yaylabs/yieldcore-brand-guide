'use client'

import { useState } from 'react'
import { BRAND_COLORS } from '../lib/colors'

export default function ColorTestingSection() {
  const [selectedBg, setSelectedBg] = useState('#0A2A2A') // brand-midnight
  const [selectedText, setSelectedText] = useState('#FFFFFF') // white
  const [selectedBoxBg, setSelectedBoxBg] = useState('#152E2E') // brand-ocean
  const [selectedBoxText, setSelectedBoxText] = useState('#B6E6E6') // brand-teal

  const colorOptions = [
    { name: 'Midnight Teal', value: '#0A2A2A', class: 'bg-brand-midnight' },
    { name: 'Deep Ocean', value: '#152E2E', class: 'bg-brand-ocean' },
    { name: 'Dark Slate', value: '#0C1B1B', class: 'bg-brand-slate' },
    { name: 'Bright Gold', value: '#F4C430', class: 'bg-brand-gold' },
    { name: 'Golden Amber', value: '#E6AC00', class: 'bg-brand-amber' },
    { name: 'Soft Teal', value: '#B6E6E6', class: 'bg-brand-teal' },
    { name: 'White', value: '#FFFFFF', class: 'bg-white' },
    { name: 'Black', value: '#000000', class: 'bg-black' },
  ]

  const testScenarios = [
    {
      title: '히어로 섹션',
      description: '대형 헤드라인과 서브텍스트가 포함된 메인 섹션',
      content: (
        <div className="p-8 rounded-xl" style={{ backgroundColor: selectedBg }}>
          <h1 className="text-4xl font-bold mb-4" style={{ color: selectedText }}>
            YieldCore Brand Guide
          </h1>
          <p className="text-lg mb-6" style={{ color: selectedText, opacity: 0.8 }}>
            Real World Assets • Blockchain Innovation
          </p>
          <div className="inline-flex items-center px-6 py-3 rounded-lg" style={{ backgroundColor: selectedBoxBg }}>
            <span className="font-semibold" style={{ color: selectedBoxText }}>
              시작하기
            </span>
          </div>
        </div>
      )
    },
    {
      title: '카드 컴포넌트',
      description: '정보를 담는 카드 형태의 컴포넌트',
      content: (
        <div className="p-6 rounded-xl border" style={{ backgroundColor: selectedBg, borderColor: selectedBoxBg }}>
          <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: selectedBoxBg }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: selectedBoxText }}>
              Logo Guidelines
            </h3>
            <p style={{ color: selectedBoxText, opacity: 0.8 }}>
              로고 사용 가이드라인과 규칙을 확인하세요.
            </p>
          </div>
          <p style={{ color: selectedText }}>
            브랜드 일관성을 유지하기 위한 중요한 정보입니다.
          </p>
        </div>
      )
    },
    {
      title: '네비게이션',
      description: '상단 네비게이션 바 스타일',
      content: (
        <div className="p-4 rounded-xl flex justify-between items-center" style={{ backgroundColor: selectedBg }}>
          <div className="font-bold text-lg" style={{ color: selectedText }}>
            YieldCore
          </div>
          <div className="flex gap-4">
            <span style={{ color: selectedText, opacity: 0.8 }}>Logo</span>
            <span style={{ color: selectedText, opacity: 0.8 }}>Colors</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: selectedBoxBg, color: selectedBoxText }}>
              Downloads
            </span>
          </div>
        </div>
      )
    },
    {
      title: '텍스트 가독성',
      description: '다양한 텍스트 크기와 두께 테스트',
      content: (
        <div className="p-6 rounded-xl" style={{ backgroundColor: selectedBg }}>
          <h1 className="text-3xl font-black mb-2" style={{ color: selectedText }}>
            Large Heading
          </h1>
          <h2 className="text-2xl font-bold mb-2" style={{ color: selectedText }}>
            Medium Heading
          </h2>
          <h3 className="text-xl font-semibold mb-2" style={{ color: selectedText }}>
            Small Heading
          </h3>
          <p className="text-base mb-2" style={{ color: selectedText }}>
            Regular paragraph text for body content.
          </p>
          <p className="text-sm" style={{ color: selectedText, opacity: 0.7 }}>
            Small caption or helper text.
          </p>
          <div className="mt-4 p-3 rounded" style={{ backgroundColor: selectedBoxBg }}>
            <span className="text-sm font-medium" style={{ color: selectedBoxText }}>
              박스 안의 텍스트 예시
            </span>
          </div>
        </div>
      )
    }
  ]

  const ColorPicker = ({ label, value, onChange }: { label: string, value: string, onChange: (color: string) => void }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-white mb-2">{label}</label>
      <div className="grid grid-cols-4 gap-2">
        {colorOptions.map((color) => (
          <button
            key={color.value}
            className={`w-12 h-12 rounded-lg border-2 transition-all ${
              value === color.value ? 'border-brand-gold scale-110' : 'border-gray-600'
            }`}
            style={{ backgroundColor: color.value }}
            onClick={() => onChange(color.value)}
            title={color.name}
          />
        ))}
      </div>
      <div className="mt-2 text-xs text-gray-300">
        선택된 색상: {colorOptions.find(c => c.value === value)?.name || value}
      </div>
    </div>
  )

  return (
    <section id="color-test" className="py-24 section-padding bg-brand-slate">
      <div className="container-max">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">색상 조합 테스트</h2>
          <p className="text-gray-300 max-w-3xl">
            다양한 상황에서의 색상 조합을 테스트하고 최적의 조합을 찾아보세요.
            배경색, 텍스트색, 박스 배경색, 박스 텍스트색을 자유롭게 조합해볼 수 있습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 색상 선택 패널 */}
          <div className="lg:col-span-1">
            <div className="bg-brand-midnight p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">색상 선택</h3>
              
              <ColorPicker 
                label="배경색" 
                value={selectedBg} 
                onChange={setSelectedBg} 
              />
              
              <ColorPicker 
                label="텍스트색" 
                value={selectedText} 
                onChange={setSelectedText} 
              />
              
              <ColorPicker 
                label="박스 배경색" 
                value={selectedBoxBg} 
                onChange={setSelectedBoxBg} 
              />
              
              <ColorPicker 
                label="박스 텍스트색" 
                value={selectedBoxText} 
                onChange={setSelectedBoxText} 
              />

              <div className="mt-6 p-4 bg-brand-ocean rounded-lg">
                <h4 className="text-white font-semibold mb-2">현재 색상 코드</h4>
                <div className="text-xs text-brand-teal space-y-1">
                  <div>배경: {selectedBg}</div>
                  <div>텍스트: {selectedText}</div>
                  <div>박스 배경: {selectedBoxBg}</div>
                  <div>박스 텍스트: {selectedBoxText}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 테스트 시나리오들 */}
          <div className="lg:col-span-2 space-y-8">
            {testScenarios.map((scenario, index) => (
              <div key={index} className="bg-brand-midnight border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-brand-ocean text-white p-4">
                  <h3 className="text-lg font-bold">{scenario.title}</h3>
                  <p className="text-sm text-brand-teal mt-1">{scenario.description}</p>
                </div>
                <div className="p-6">
                  {scenario.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 추천 색상 조합 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">추천 색상 조합</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: '다크 모드 기본',
                bg: '#0A2A2A',
                text: '#FFFFFF',
                boxBg: '#152E2E',
                boxText: '#B6E6E6'
              },
              {
                name: '골드 악센트',
                bg: '#0C1B1B',
                text: '#FFFFFF',
                boxBg: '#F4C430',
                boxText: '#0A2A2A'
              },
              {
                name: '라이트 박스',
                bg: '#152E2E',
                text: '#B6E6E6',
                boxBg: '#FFFFFF',
                boxText: '#0A2A2A'
              },
              {
                name: '틸 포커스',
                bg: '#0A2A2A',
                text: '#B6E6E6',
                boxBg: '#B6E6E6',
                boxText: '#0A2A2A'
              }
            ].map((preset, index) => (
              <button
                key={index}
                className="p-4 rounded-xl border border-white/10 hover:border-brand-gold/50 transition-all group"
                onClick={() => {
                  setSelectedBg(preset.bg)
                  setSelectedText(preset.text)
                  setSelectedBoxBg(preset.boxBg)
                  setSelectedBoxText(preset.boxText)
                }}
              >
                <div className="mb-3 p-3 rounded-lg" style={{ backgroundColor: preset.bg }}>
                  <div className="text-sm font-medium mb-2" style={{ color: preset.text }}>
                    Sample Text
                  </div>
                  <div className="inline-block px-2 py-1 rounded text-xs" style={{ backgroundColor: preset.boxBg, color: preset.boxText }}>
                    Button
                  </div>
                </div>
                <div className="text-white font-medium group-hover:text-brand-gold transition-colors">
                  {preset.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}