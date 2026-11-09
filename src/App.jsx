const accounts = [
  { name: 'Checking', number: '•••• 4832', balance: 12845.24, accent: 'blue' },
  { name: 'Savings', number: '•••• 9014', balance: 48230.18, accent: 'green' },
  { name: 'Travel', number: '•••• 2261', balance: 6124.9, accent: 'purple' },
];

const stats = [
  { label: 'Total balance', value: '$60,200.32', delta: '+4.8%' },
  { label: 'Monthly income', value: '$12,420.00', delta: '+1.2%' },
  { label: 'Monthly spend', value: '$7,630.14', delta: '-2.6%' },
];

const spendBreakdown = [
  { label: 'Housing', value: 38, amount: '$1,210', color: 'var(--teal)' },
  { label: 'Food', value: 22, amount: '$710', color: 'var(--blue)' },
  { label: 'Travel', value: 18, amount: '$560', color: 'var(--purple)' },
  { label: 'Bills', value: 14, amount: '$430', color: 'var(--amber)' },
  { label: 'Other', value: 8, amount: '$248', color: 'var(--slate)' },
];

const transactions = [
  { name: 'Salary Deposit', type: 'income', date: 'Today • 9:42 AM', amount: '+$3,200.00' },
  { name: 'Wire Transfer', type: 'transfer', date: 'Yesterday • 7:18 PM', amount: '-$820.00' },
  { name: 'Fresh Market', type: 'expense', date: 'Yesterday • 5:20 PM', amount: '-$128.46' },
  { name: 'Client Payout', type: 'income', date: 'Mon • 12:04 PM', amount: '+$1,480.00' },
  { name: 'Netflix', type: 'expense', date: 'Sun • 9:01 AM', amount: '-$15.99' },
];

const bills = [
  { name: 'Rent', due: 'Due in 2 days', amount: '$2,180.00', tag: 'Housing' },
  { name: 'Internet', due: 'Due in 5 days', amount: '$76.00', tag: 'Utilities' },
  { name: 'Insurance', due: 'Due in 9 days', amount: '$190.00', tag: 'Auto' },
];

const formatMoney = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);

function App() {
  return (
    <div className="page-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">F</div>
          <div>
            <div className="eyebrow">Fintech</div>
            <h1>Flowpay</h1>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Overview</button>
          <button className="nav-item">Accounts</button>
          <button className="nav-item">Cards</button>
          <button className="nav-item">Transfers</button>
          <button className="nav-item">Insights</button>
        </nav>

        <div className="sidebar-card">
          <span className="pill neutral">Cash flow</span>
          <strong>+$8,420</strong>
          <small>vs last month</small>
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow muted">Welcome back</p>
            <h2>Good morning, Maya</h2>
          </div>

          <div className="topbar-actions">
            <button className="ghost-btn">Export</button>
            <button className="primary-btn">Send money</button>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <em>{stat.delta}</em>
            </article>
          ))}
        </section>

        <section className="main-grid">
          <div className="stack-column">
            <div className="panel hero-panel">
              <div className="panel-header">
                <div>
                  <p className="eyebrow muted">Balance</p>
                  <h3>{formatMoney(60200.32)}</h3>
                </div>
                <span className="pill success">+4.8%</span>
              </div>

              <div className="account-list">
                {accounts.map((account) => (
                  <div key={account.name} className={`account-card ${account.accent}`}>
                    <div>
                      <small>{account.name}</small>
                      <strong>{account.number}</strong>
                    </div>
                    <span>{formatMoney(account.balance)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="panel-header compact">
                <h3>Transactions</h3>
                <button className="text-btn">View all</button>
              </div>

              <ul className="transaction-list">
                {transactions.map((transaction) => (
                  <li key={`${transaction.name}-${transaction.date}`}>
                    <div className={`transaction-icon ${transaction.type}`}>
                      {transaction.type === 'income' ? '↗' : transaction.type === 'transfer' ? '⇄' : '↘'}
                    </div>
                    <div className="transaction-copy">
                      <strong>{transaction.name}</strong>
                      <small>{transaction.date}</small>
                    </div>
                    <span className={`transaction-amount ${transaction.type}`}>
                      {transaction.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="stack-column right-column">
            <div className="panel">
              <div className="panel-header compact">
                <h3>Spending</h3>
                <span className="pill neutral">This month</span>
              </div>

              <div className="spend-chart">
                {spendBreakdown.map((item) => (
                  <div key={item.label} className="spend-row">
                    <div className="spend-label-row">
                      <span>{item.label}</span>
                      <strong>{item.amount}</strong>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${item.value}%`, background: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="panel-header compact">
                <h3>Upcoming bills</h3>
                <button className="text-btn">Schedule</button>
              </div>

              <ul className="bill-list">
                {bills.map((bill) => (
                  <li key={bill.name}>
                    <div>
                      <strong>{bill.name}</strong>
                      <small>{bill.due}</small>
                    </div>
                    <div className="bill-meta">
                      <span>{bill.tag}</span>
                      <strong>{bill.amount}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
