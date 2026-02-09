"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];
const unavailable = [2, 5]; // indexes

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const monthNames = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export default function AgendamentoPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0); // 0: date, 1: time, 2: form

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear((y) => y - 1); }
    else setCurrentMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear((y) => y + 1); }
    else setCurrentMonth((m) => m + 1);
  };

  const isWeekday = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    const dow = d.getDay();
    return dow !== 0 && dow !== 6;
  };
  const isPast = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Agendamento confirmado!");
  };

  if (submitted) {
    return (
      <div className="pt-16">
        <div className="max-w-lg mx-auto px-4 py-20 text-center">
          <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto" />
          <h1 className="mt-6 font-heading text-3xl font-bold text-foreground">Agendamento Confirmado!</h1>
          <p className="mt-4 text-muted-foreground">
            Sua consultoria esta agendada para <strong>{selectedDate} de {monthNames[currentMonth]} de {currentYear}</strong> as <strong>{selectedTime}</strong>.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Voce recebera um email de confirmacao em breve.</p>
          <button onClick={() => { setSubmitted(false); setStep(0); setSelectedDate(null); setSelectedTime(null); }} className="mt-8 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            Agendar outra consultoria
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-4xl font-bold text-foreground text-center">Agende uma Consultoria</h1>
        <p className="mt-4 text-muted-foreground text-center">Escolha a data e horario para conversar com nossos especialistas</p>

        {/* Steps */}
        <div className="mt-12 flex items-center justify-center gap-8 mb-10">
          {["Data", "Horario", "Dados"].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium", i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>
                {i + 1}
              </div>
              <span className="text-sm text-muted-foreground hidden sm:block">{label}</span>
            </div>
          ))}
        </div>

        {/* Step 0: Calendar */}
        {step === 0 && (
          <div className="max-w-md mx-auto rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <button onClick={prevMonth} className="p-2 hover:bg-accent rounded-lg transition-colors"><ChevronLeftIcon className="w-4 h-4" /></button>
              <h3 className="font-heading font-semibold text-foreground">{monthNames[currentMonth]} {currentYear}</h3>
              <button onClick={nextMonth} className="p-2 hover:bg-accent rounded-lg transition-colors"><ChevronRightIcon className="w-4 h-4" /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((d) => (
                <span key={d} className="text-xs font-medium text-muted-foreground py-2">{d}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                const available = isWeekday(day) && !isPast(day);
                const selected = selectedDate === day;
                return (
                  <button
                    key={day}
                    disabled={!available}
                    onClick={() => setSelectedDate(day)}
                    className={cn("w-10 h-10 mx-auto rounded-lg text-sm font-medium transition-colors", selected ? "bg-primary text-primary-foreground" : available ? "hover:bg-accent text-foreground" : "text-muted-foreground/30 cursor-not-allowed")}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
            <button disabled={!selectedDate} onClick={() => setStep(1)} className="mt-6 w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors">
              Continuar
            </button>
          </div>
        )}

        {/* Step 1: Time */}
        {step === 1 && (
          <div className="max-w-md mx-auto rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" /> {selectedDate} de {monthNames[currentMonth]} de {currentYear}
            </p>
            <h3 className="font-heading font-semibold text-foreground mb-4">Escolha um horario</h3>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time, i) => {
                const isUnavailable = unavailable.includes(i);
                return (
                  <button
                    key={time}
                    disabled={isUnavailable}
                    onClick={() => setSelectedTime(time)}
                    className={cn("py-3 rounded-xl text-sm font-medium transition-all border-2", selectedTime === time ? "border-primary bg-primary/5 text-primary" : isUnavailable ? "border-border text-muted-foreground/30 cursor-not-allowed" : "border-border hover:border-primary/30 text-foreground")}
                  >
                    {time}
                    {isUnavailable && <span className="block text-xs text-muted-foreground/50">Indisponivel</span>}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep(0)} className="flex-1 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors">Voltar</button>
              <button disabled={!selectedTime} onClick={() => setStep(2)} className="flex-1 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors">Continuar</button>
            </div>
          </div>
        )}

        {/* Step 2: Form */}
        {step === 2 && (
          <div className="max-w-md mx-auto rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" /> {selectedDate} de {monthNames[currentMonth]}
              <ClockIcon className="w-4 h-4 ml-2" /> {selectedTime}
            </p>
            <h3 className="font-heading font-semibold text-foreground mt-3 mb-4">Seus dados</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required placeholder="Nome completo" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input required type="email" placeholder="Email" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input placeholder="Telefone" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input placeholder="Empresa" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <select className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Consultoria Inicial (30min)</option>
                <option>Apresentacao de Servicos (45min)</option>
                <option>Workshop Tecnico (60min)</option>
              </select>
              <textarea placeholder="Observacoes (opcional)" rows={3} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors">Voltar</button>
                <button type="submit" className="flex-1 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">Confirmar</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
