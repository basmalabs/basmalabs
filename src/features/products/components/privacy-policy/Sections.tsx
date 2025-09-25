import React from "react";

export function LegalLayout( { children }: { children: React.ReactNode } ) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-3xl px-5 py-10">{ children }</main>
    </div>
  );
}


export function LegalHeader( {
  serviceProvider,
  appName,
  effectiveDate,
  titleSuffix = "Terms & Conditions & Privacy Policy",
}: {
  serviceProvider: string;
  appName: string;
  effectiveDate: string;
  titleSuffix?: string;
} ) {
  return (
    <header className="mb-6">
      <p className="uppercase tracking-widest text-xs text-slate-500">{ serviceProvider }</p>
      <h1 className="text-3xl font-semibold leading-tight">
        { appName } — { titleSuffix }
      </h1>
      <p className="text-sm text-slate-600 mt-1">
        Effective date: <strong>{ effectiveDate }</strong>
      </p>
    </header>
  );
}


export function LegalCard( { children }: { children: React.ReactNode } ) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      { children }
    </section>
  );
}


export function LegalSection( { title, children }: { title: React.ReactNode; children: React.ReactNode } ) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold leading-7">{ title }</h2>
      <div className="mt-3 space-y-3 text-base">{ children }</div>
    </section>
  );
}


export function Bulleted( { items }: { items: React.ReactNode[] } ) {
  return (
    <ul className="list-disc pl-6">
      { items.map( ( li, i ) => (
        <li key={ i } className="my-1">{ li }</li>
      ) ) }
    </ul>
  );
}


export function Footer( { serviceProvider }: { serviceProvider: string } ) {
  return (
    <footer className="text-sm text-slate-600 mt-10">
      <hr className="my-6 border-slate-200" />
      <p>&copy; { new Date().getFullYear() } { serviceProvider }. All rights reserved.</p>
    </footer>
  );
}