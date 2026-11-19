/**
 * ASTRA BUSINESS AI — Core Application Logic
 * Premium, ultra-lightweight, 100% client-side business dashboard.
 * Zero external frameworks, zero paid APIs, zero heavy dependencies.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA STORE & DEMO DATA SEEDING
  // =========================================================================
  const STORAGE_KEY = 'astra_business_data_v2';

  const DEFAULT_DEMO_DATA = {
    customers: [
      {
        id: 'c-101',
        name: 'Sarah Jenkins',
        company: 'Apex Global Technologies',
        email: 'sarah.j@apextech.com',
        phone: '+1 (555) 349-2041',
        status: 'vip',
        spend: 48500,
        since: '2025-03-12',
        notes: 'Enterprise Tier A client. Interested in Q4 multi-seat AI license expansion.'
      },
      {
        id: 'c-102',
        name: 'Dr. Robert Chen',
        company: 'Lumina Health Systems',
        email: 'rchen@luminahealth.org',
        phone: '+1 (555) 892-1102',
        status: 'active',
        spend: 29000,
        since: '2025-06-18',
        notes: 'Compliance and HIPAA security requirements reviewed and cleared.'
      },
      {
        id: 'c-103',
        name: 'Elena Vance',
        company: 'Vance Intermodal Logistics',
        email: 'elena@vancelogistics.io',
        phone: '+1 (555) 431-9876',
        status: 'active',
        spend: 34200,
        since: '2025-08-04',
        notes: 'Fleet tracking and dispatch automation contract active.'
      },
      {
        id: 'c-104',
        name: 'Marcus Brody',
        company: 'Nexus Capital Advisors',
        email: 'mbrody@nexuscap.net',
        phone: '+1 (555) 762-3341',
        status: 'vip',
        spend: 62000,
        since: '2024-11-20',
        notes: 'Key executive account. Quarterly reviews held directly with leadership.'
      },
      {
        id: 'c-105',
        name: 'Amara Okafor',
        company: 'Kora Renewable Dynamics',
        email: 'amara.o@koradynamics.com',
        phone: '+1 (555) 604-8921',
        status: 'prospect',
        spend: 0,
        since: '2026-09-02',
        notes: 'Evaluating our energy data intelligence suite against competing offerings.'
      },
      {
        id: 'c-106',
        name: 'Julian Sterling',
        company: 'Sterling Brand Studio',
        email: 'julian@sterlingstudio.design',
        phone: '+1 (555) 219-5430',
        status: 'inactive',
        spend: 14000,
        since: '2025-01-15',
        notes: 'Previous retainer concluded; scheduled for Q4 re-engagement touchpoint.'
      }
    ],

    leads: [
      {
        id: 'l-201',
        title: 'Enterprise AI Governance Rollout',
        company: 'Apex Global Technologies',
        contact: 'Sarah Jenkins',
        value: 36000,
        stage: 'negotiation',
        priority: 'urgent',
        source: 'Client Referral',
        closeDate: '2026-11-28'
      },
      {
        id: 'l-202',
        title: 'Fleet Automation Platform Pilot',
        company: 'Vance Intermodal Logistics',
        contact: 'Elena Vance',
        value: 28500,
        stage: 'proposal',
        priority: 'high',
        source: 'Direct Sales',
        closeDate: '2026-12-05'
      },
      {
        id: 'l-203',
        title: 'Clinical Data Analytics Integration',
        company: 'Lumina Health Systems',
        contact: 'Dr. Robert Chen',
        value: 45000,
        stage: 'negotiation',
        priority: 'high',
        source: 'Website Inbound',
        closeDate: '2026-11-24'
      },
      {
        id: 'l-204',
        title: 'Renewable Telemetry Hub',
        company: 'Kora Renewable Dynamics',
        contact: 'Amara Okafor',
        value: 19500,
        stage: 'contacted',
        priority: 'medium',
        source: 'LinkedIn Outbound',
        closeDate: '2026-12-15'
      },
      {
        id: 'l-205',
        title: 'Wealth Portal UI Modernization',
        company: 'Zenith Wealth Partners',
        contact: 'Claire Thornton',
        value: 31000,
        stage: 'new',
        priority: 'medium',
        source: 'Website Inbound',
        closeDate: '2027-01-10'
      },
      {
        id: 'l-206',
        title: 'Global Supply Chain Risk Audit',
        company: 'Titan Logistics Corp',
        contact: 'David Keller',
        value: 52000,
        stage: 'won',
        priority: 'high',
        source: 'Industry Conference',
        closeDate: '2026-10-30'
      }
    ],

    appointments: [
      {
        id: 'a-301',
        title: 'Executive Contract & Terms Finalization',
        client: 'Sarah Jenkins',
        company: 'Apex Global',
        date: getRelativeDate(0), // Today
        time: '14:30',
        type: 'Contract Review',
        platform: 'Google Meet',
        status: 'scheduled',
        notes: 'Review indemnification clause and annual recurring discount.'
      },
      {
        id: 'a-302',
        title: 'Astra AI Workflow Demonstration',
        client: 'Elena Vance',
        company: 'Vance Logistics',
        date: getRelativeDate(0), // Today
        time: '16:00',
        type: 'Product Demo',
        platform: 'Zoom',
        status: 'scheduled',
        notes: 'Walk through real-time telemetry dispatch alerts.'
      },
      {
        id: 'a-303',
        title: 'Clinical Architecture Review',
        client: 'Dr. Robert Chen',
        company: 'Lumina Health',
        date: getRelativeDate(1), // Tomorrow
        time: '11:00',
        type: 'Strategy Session',
        platform: 'Google Meet',
        status: 'scheduled',
        notes: 'Present technical security whitepaper and failover SLA.'
      },
      {
        id: 'a-304',
        title: 'Renewable Systems Scoping Call',
        client: 'Amara Okafor',
        company: 'Kora Dynamics',
        date: getRelativeDate(3),
        time: '10:00',
        type: 'Discovery Call',
        platform: 'Phone Call',
        status: 'scheduled',
        notes: 'Initial scope qualification on cloud data ingest.'
      },
      {
        id: 'a-305',
        title: 'Q3 Enterprise Performance Review',
        client: 'Marcus Brody',
        company: 'Nexus Capital',
        date: getRelativeDate(-2),
        time: '15:00',
        type: 'QBR Review',
        platform: 'In-Person',
        status: 'completed',
        notes: 'Client expressed 100% satisfaction with response latency.'
      }
    ],

    payments: [
      {
        id: 'p-401',
        invoiceNum: 'INV-2026-081',
        client: 'Apex Global Technologies',
        amount: 18500,
        dueDate: getRelativeDate(-5),
        status: 'paid',
        method: 'Wire Transfer',
        description: 'Enterprise Cloud Deployment Milestone 2'
      },
      {
        id: 'p-402',
        invoiceNum: 'INV-2026-082',
        client: 'Titan Logistics Corp',
        amount: 26000,
        dueDate: getRelativeDate(-1),
        status: 'paid',
        method: 'Wire Transfer',
        description: 'Risk Audit Retainer Deposit'
      },
      {
        id: 'p-403',
        invoiceNum: 'INV-2026-083',
        client: 'Nexus Capital Advisors',
        amount: 15500,
        dueDate: getRelativeDate(4),
        status: 'pending',
        method: 'ACH',
        description: 'Monthly Managed Services & Support SLA'
      },
      {
        id: 'p-404',
        invoiceNum: 'INV-2026-084',
        client: 'Lumina Health Systems',
        amount: 12000,
        dueDate: getRelativeDate(10),
        status: 'pending',
        method: 'Wire Transfer',
        description: 'HIPAA Security Hardening Module'
      },
      {
        id: 'p-405',
        invoiceNum: 'INV-2026-079',
        client: 'Sterling Brand Studio',
        amount: 4200,
        dueDate: getRelativeDate(-12),
        status: 'overdue',
        method: 'Stripe / Card',
        description: 'Advisory Retainer Overdue Balance'
      },
      {
        id: 'p-406',
        invoiceNum: 'INV-2026-080',
        client: 'Vance Intermodal Logistics',
        amount: 3200,
        dueDate: getRelativeDate(-4),
        status: 'overdue',
        method: 'Corporate Check',
        description: 'Custom Telemetry Hardware Adapter Fee'
      }
    ],

    tasks: [
      {
        id: 't-501',
        title: 'Send amended SLA agreement to Sarah Jenkins',
        priority: 'urgent',
        category: 'Contract',
        dueDate: getRelativeDate(0),
        related: 'Apex Global',
        completed: false
      },
      {
        id: 't-502',
        title: 'Dispatch overdue payment notice for Invoice #INV-2026-079',
        priority: 'urgent',
        category: 'Finance',
        dueDate: getRelativeDate(0),
        related: 'Sterling Brand Studio',
        completed: false
      },
      {
        id: 't-503',
        title: 'Prepare benchmark slides for Vance Logistics demo',
        priority: 'high',
        category: 'Follow-up',
        dueDate: getRelativeDate(0),
        related: 'Vance Logistics',
        completed: false
      },
      {
        id: 't-504',
        title: 'Submit HIPAA architecture security audit to Dr. Chen',
        priority: 'high',
        category: 'Contract',
        dueDate: getRelativeDate(1),
        related: 'Lumina Health',
        completed: false
      },
      {
        id: 't-505',
        title: 'Review Q4 outbound sales target quotas with team',
        priority: 'medium',
        category: 'Ops',
        dueDate: getRelativeDate(3),
        related: 'Internal',
        completed: true
      },
      {
        id: 't-506',
        title: 'Schedule quarterly business review with Marcus Brody',
        priority: 'low',
        category: 'Call',
        dueDate: getRelativeDate(5),
        related: 'Nexus Capital',
        completed: true
      }
    ],

    notifications: [
      {
        id: 'n-1',
        text: 'Astra AI detected 2 overdue invoices requiring immediate follow-up.',
        time: '10m ago'
      },
      {
        id: 'n-2',
        text: 'Apex Global opportunity upgraded to Negotiation stage ($36,000).',
        time: '1h ago'
      },
      {
        id: 'n-3',
        text: 'Titan Logistics deposited $26,000 via Wire Transfer.',
        time: '3h ago'
      }
    ]
  };

  function getRelativeDate(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
  }

  // State Manager
  class Store {
    constructor() {
      this.data = this.load();
    }

    load() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          return JSON.parse(raw);
        }
      } catch (e) {
        console.warn('Storage read error, using defaults', e);
      }
      return JSON.parse(JSON.stringify(DEFAULT_DEMO_DATA));
    }

    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      } catch (e) {
        console.error('Storage write error', e);
      }
    }

    reset() {
      this.data = JSON.parse(JSON.stringify(DEFAULT_DEMO_DATA));
      this.save();
    }
  }

  const appStore = new Store();

  // =========================================================================
  // 2. ASTRA APPLICATION CORE CONTROLLER
  // =========================================================================
  const AstraApp = {
    currentView: 'overview',
    leadViewMode: 'kanban',
    selectedTone: 'professional',

    init() {
      this.setupDOM();
      this.setupEventListeners();
      this.renderCurrentView();
      this.updateSidebarBadges();
      this.updateDateDisplay();
      this.refreshNotifications();
      this.initCharts();
    },

    setupDOM() {
      this.el = {
        sidebar: document.getElementById('sidebar'),
        sidebarToggleBtn: document.getElementById('sidebarToggleBtn'),
        sidebarCloseBtn: document.getElementById('sidebarCloseBtn'),
        viewTitle: document.getElementById('currentViewTitle'),
        dateDisplay: document.getElementById('currentDateDisplay'),
        globalSearch: document.getElementById('globalSearchInput'),
        searchDropdown: document.getElementById('searchDropdown'),
        quickAddBtn: document.getElementById('quickAddBtn'),
        quickAddMenu: document.getElementById('quickAddMenu'),
        notifBtn: document.getElementById('notifBtn'),
        notifMenu: document.getElementById('notifMenu'),
        notifDot: document.getElementById('notifDot'),
        notifList: document.getElementById('notifList'),
        dataToolsBtn: document.getElementById('dataToolsBtn'),
        dataToolsMenu: document.getElementById('dataToolsMenu'),
        toastContainer: document.getElementById('toastContainer')
      };
    },

    setupEventListeners() {
      const self = this;

      // Sidebar view navigation
      document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const view = btn.dataset.view;
          if (view) {
            self.switchView(view);
            if (window.innerWidth <= 768) {
              self.el.sidebar.classList.remove('open');
            }
          }
        });
      });

      // Sidebar mobile toggles
      if (this.el.sidebarToggleBtn) {
        this.el.sidebarToggleBtn.addEventListener('click', () => {
          this.el.sidebar.classList.toggle('open');
        });
      }
      if (this.el.sidebarCloseBtn) {
        this.el.sidebarCloseBtn.addEventListener('click', () => {
          this.el.sidebar.classList.remove('open');
        });
      }

      // Reset Demo Button
      const resetBtn = document.getElementById('resetDemoBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (confirm('Reset all Astra Business AI data back to demo defaults? Any local modifications will be overwritten.')) {
            appStore.reset();
            self.init();
            self.showToast('Demo data restored successfully!', 'success');
          }
        });
      }

      // Global Quick Search
      if (this.el.globalSearch) {
        this.el.globalSearch.addEventListener('input', (e) => {
          self.handleGlobalSearch(e.target.value.trim());
        });
        this.el.globalSearch.addEventListener('focus', (e) => {
          if (e.target.value.trim()) self.handleGlobalSearch(e.target.value.trim());
        });
      }

      // Quick Add Menu toggle
      if (this.el.quickAddBtn) {
        this.el.quickAddBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          self.el.quickAddMenu.classList.toggle('hidden');
          self.el.notifMenu.classList.add('hidden');
          self.el.dataToolsMenu.classList.add('hidden');
        });
      }

      // Notif Menu toggle
      if (this.el.notifBtn) {
        this.el.notifBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          self.el.notifMenu.classList.toggle('hidden');
          self.el.quickAddMenu.classList.add('hidden');
          self.el.dataToolsMenu.classList.add('hidden');
          self.el.notifDot.classList.remove('active');
        });
      }

      // Data Tools Menu toggle
      if (this.el.dataToolsBtn) {
        this.el.dataToolsBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          self.el.dataToolsMenu.classList.toggle('hidden');
          self.el.quickAddMenu.classList.add('hidden');
          self.el.notifMenu.classList.add('hidden');
        });
      }

      // Close dropdowns on outside click
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-wrapper')) {
          self.el.quickAddMenu?.classList.add('hidden');
          self.el.notifMenu?.classList.add('hidden');
          self.el.dataToolsMenu?.classList.add('hidden');
        }
        if (!e.target.closest('.global-search-container')) {
          self.el.searchDropdown?.classList.add('hidden');
        }
      });

      // Keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        // Press '/' to search
        if (e.key === '/' && document.activeElement !== self.el.globalSearch && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          self.el.globalSearch?.focus();
        }
        // Press 'Esc' to close active modals & dropdowns
        if (e.key === 'Escape') {
          document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(modal => {
            modal.classList.add('hidden');
          });
          self.el.searchDropdown?.classList.add('hidden');
          self.el.quickAddMenu?.classList.add('hidden');
          self.el.notifMenu?.classList.add('hidden');
          self.el.dataToolsMenu?.classList.add('hidden');
        }
      });

      // Quick task input Enter key
      const quickTaskInput = document.getElementById('quickTaskInput');
      if (quickTaskInput) {
        quickTaskInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            self.addQuickTask();
          }
        });
      }

      // Local search inputs in sections
      document.getElementById('customerSearchInput')?.addEventListener('input', (e) => {
        self.renderCustomers(e.target.value.toLowerCase());
      });
      document.getElementById('leadSearchInput')?.addEventListener('input', (e) => {
        self.renderLeads(e.target.value.toLowerCase());
      });
      document.getElementById('appointmentSearchInput')?.addEventListener('input', (e) => {
        self.renderAppointments(e.target.value.toLowerCase());
      });
      document.getElementById('paymentSearchInput')?.addEventListener('input', (e) => {
        self.renderPayments(e.target.value.toLowerCase());
      });
      document.getElementById('taskSearchInput')?.addEventListener('input', (e) => {
        self.renderTasks(e.target.value.toLowerCase());
      });
    },

    updateDateDisplay() {
      const now = new Date();
      const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      if (this.el.dateDisplay) {
        this.el.dateDisplay.textContent = now.toLocaleDateString('en-US', options);
      }
    },

    switchView(viewName) {
      this.currentView = viewName;
      // Update sidebar nav items
      document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
      });

      // Update View Panels
      document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `view-${viewName}`);
      });

      // Update title text
      const titles = {
        'overview': 'Executive Overview',
        'customers': 'Customer Directory (CRM)',
        'leads': 'Sales Pipeline & Leads',
        'appointments': 'Appointments & Meetings',
        'payments': 'Payment Tracking & Invoices',
        'tasks': 'Follow-up Task Manager',
        'analytics': 'Sales Analytics & Intelligence',
        'ai-assistant': 'Astra AI Business Advisor'
      };
      if (this.el.viewTitle) {
        this.el.viewTitle.textContent = titles[viewName] || 'Astra Business';
      }

      // Refresh view contents
      this.renderCurrentView();
    },

    renderCurrentView() {
      switch (this.currentView) {
        case 'overview':
          this.renderOverview();
          break;
        case 'customers':
          this.renderCustomers();
          break;
        case 'leads':
          this.renderLeads();
          break;
        case 'appointments':
          this.renderAppointments();
          break;
        case 'payments':
          this.renderPayments();
          break;
        case 'tasks':
          this.renderTasks();
          break;
        case 'analytics':
          this.renderAnalytics();
          break;
        case 'ai-assistant':
          this.renderAiAdvisor();
          break;
      }
    },

    updateSidebarBadges() {
      const d = appStore.data;
      const clientCount = document.getElementById('clientCountBadge');
      const leadCount = document.getElementById('leadCountBadge');
      const apptCount = document.getElementById('apptCountBadge');
      const taskCount = document.getElementById('pendingTaskBadge');

      if (clientCount) clientCount.textContent = d.customers.length;
      if (leadCount) leadCount.textContent = d.leads.filter(l => l.stage !== 'won' && l.stage !== 'lost').length;
      if (apptCount) apptCount.textContent = d.appointments.filter(a => a.status === 'scheduled').length;
      if (taskCount) taskCount.textContent = d.tasks.filter(t => !t.completed).length;

      // Update Health Score Pill in sidebar
      const health = this.calculateBusinessHealth();
      const sidebarScore = document.getElementById('sidebarHealthScore');
      if (sidebarScore) sidebarScore.textContent = `${health.score}%`;
    },

    // =========================================================================
    // 3. OVERVIEW DASHBOARD VIEW
    // =========================================================================
    renderOverview() {
      const d = appStore.data;

      // Calculate KPIs
      const totalPaid = d.payments
        .filter(p => p.status === 'paid')
        .reduce((sum, p) => sum + p.amount, 0);

      const activeClients = d.customers.filter(c => c.status === 'active' || c.status === 'vip').length;

      const pipelineTotal = d.leads
        .filter(l => l.stage !== 'lost')
        .reduce((sum, l) => sum + l.value, 0);

      const overduePayments = d.payments.filter(p => p.status === 'overdue');
      const overdueTotal = overduePayments.reduce((sum, p) => sum + p.amount, 0);

      // Populate KPI elements
      const kpiRev = document.getElementById('kpiRevenue');
      const kpiCli = document.getElementById('kpiClients');
      const kpiPipe = document.getElementById('kpiPipeline');
      const kpiOver = document.getElementById('kpiOverdue');
      const kpiOverCount = document.getElementById('kpiOverdueCount');

      if (kpiRev) kpiRev.textContent = `$${totalPaid.toLocaleString()}`;
      if (kpiCli) kpiCli.textContent = activeClients;
      if (kpiPipe) kpiPipe.textContent = `$${pipelineTotal.toLocaleString()}`;
      if (kpiOver) kpiOver.textContent = `$${overdueTotal.toLocaleString()}`;
      if (kpiOverCount) kpiOverCount.textContent = `${overduePayments.length} invoice${overduePayments.length === 1 ? '' : 's'} pending follow-up`;

      // Update AI Banner
      const health = this.calculateBusinessHealth();
      const bannerHeadline = document.getElementById('aiBannerHeadline');
      const bannerSummary = document.getElementById('aiBannerSummary');
      if (bannerHeadline) {
        bannerHeadline.textContent = `Business Health Index: ${health.score}/100 (${health.rating})`;
      }
      if (bannerSummary) {
        bannerSummary.textContent = health.summary;
      }

      // Render Pipeline Progress Bar & Metrics
      this.renderOverviewPipeline(d.leads);

      // Render Today's Agenda Preview
      this.renderOverviewSchedule(d.appointments);

      // Render Urgent Tasks Preview
      this.renderOverviewTasks(d.tasks);

      // Render Mini Chart
      this.renderMiniRevenueChart();
    },

    renderOverviewPipeline(leads) {
      const barEl = document.getElementById('overviewPipelineBar');
      const metricsEl = document.getElementById('overviewPipelineMetrics');
      if (!barEl || !metricsEl) return;

      const stages = [
        { key: 'new', label: 'New', color: 'var(--accent-cyan)' },
        { key: 'contacted', label: 'Contacted', color: 'var(--accent-indigo)' },
        { key: 'proposal', label: 'Proposal', color: 'var(--accent-purple)' },
        { key: 'negotiation', label: 'Negotiation', color: 'var(--accent-amber)' },
        { key: 'won', label: 'Won', color: 'var(--accent-emerald)' }
      ];

      const totalVal = leads.reduce((s, l) => s + l.value, 0) || 1;

      barEl.innerHTML = stages.map(st => {
        const stageVal = leads.filter(l => l.stage === st.key).reduce((s, l) => s + l.value, 0);
        const pct = Math.round((stageVal / totalVal) * 100);
        return `<div style="width: ${Math.max(pct, 2)}%; background: ${st.color};" title="${st.label}: $${stageVal.toLocaleString()} (${pct}%)"></div>`;
      }).join('');

      metricsEl.innerHTML = stages.map(st => {
        const count = leads.filter(l => l.stage === st.key).length;
        const val = leads.filter(l => l.stage === st.key).reduce((s, l) => s + l.value, 0);
        return `
          <div class="pipeline-metric-col">
            <span>${st.label} (${count})</span>
            <strong>$${(val / 1000).toFixed(1)}k</strong>
          </div>
        `;
      }).join('');
    },

    renderOverviewSchedule(appts) {
      const listEl = document.getElementById('overviewApptList');
      if (!listEl) return;

      const todayStr = getRelativeDate(0);
      const todayAppts = appts.filter(a => a.date === todayStr && a.status === 'scheduled');

      if (todayAppts.length === 0) {
        listEl.innerHTML = `
          <div class="compact-item" style="color: var(--text-dim); justify-content: center;">
            <span>No meetings scheduled for today.</span>
          </div>`;
        return;
      }

      listEl.innerHTML = todayAppts.map(a => `
        <div class="compact-item">
          <div>
            <div class="compact-item-title">${escapeHTML(a.title)}</div>
            <div class="compact-item-sub">👤 ${escapeHTML(a.client)} • ${a.time} (${escapeHTML(a.platform)})</div>
          </div>
          <span class="status-pill status-prospect">${escapeHTML(a.type)}</span>
        </div>
      `).join('');
    },

    renderOverviewTasks(tasks) {
      const listEl = document.getElementById('overviewTaskList');
      if (!listEl) return;

      const urgentTasks = tasks
        .filter(t => !t.completed && (t.priority === 'urgent' || t.priority === 'high'))
        .slice(0, 4);

      if (urgentTasks.length === 0) {
        listEl.innerHTML = `
          <div class="compact-item" style="color: var(--text-dim); justify-content: center;">
            <span>All high-priority tasks completed!</span>
          </div>`;
        return;
      }

      listEl.innerHTML = urgentTasks.map(t => `
        <div class="compact-item">
          <div>
            <div class="compact-item-title">${escapeHTML(t.title)}</div>
            <div class="compact-item-sub">Due: ${t.dueDate || 'ASAP'} • ${escapeHTML(t.related || 'General')}</div>
          </div>
          <span class="priority-tag priority-${t.priority}">${t.priority}</span>
        </div>
      `).join('');
    },

    // =========================================================================
    // 4. CUSTOMER MANAGEMENT (CRM)
    // =========================================================================
    customerFilter: 'all',

    filterCustomers(filter, btn) {
      this.customerFilter = filter;
      document.querySelectorAll('#view-customers .filter-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      this.renderCustomers();
    },

    renderCustomers(query = '') {
      const tbody = document.getElementById('customerTableBody');
      const emptyState = document.getElementById('customerEmptyState');
      const countAll = document.getElementById('countClientAll');
      if (!tbody) return;

      const customers = appStore.data.customers;
      if (countAll) countAll.textContent = customers.length;

      let filtered = customers.filter(c => {
        const matchesFilter = this.customerFilter === 'all' || c.status === this.customerFilter;
        const matchesQuery = !query ||
          c.name.toLowerCase().includes(query) ||
          c.company.toLowerCase().includes(query) ||
          c.email.toLowerCase().includes(query);
        return matchesFilter && matchesQuery;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = '';
        emptyState?.classList.remove('hidden');
        return;
      }

      emptyState?.classList.add('hidden');
      tbody.innerHTML = filtered.map(c => `
        <tr>
          <td>
            <div class="cell-primary">${escapeHTML(c.name)}</div>
            <div class="cell-sub">${escapeHTML(c.company)}</div>
          </td>
          <td>
            <div>${escapeHTML(c.email)}</div>
            <div class="cell-sub">${escapeHTML(c.phone || 'No phone')}</div>
          </td>
          <td>
            <span class="status-pill status-${c.status}">
              ${c.status === 'vip' ? '⭐ VIP' : c.status}
            </span>
          </td>
          <td class="cell-primary text-emerald">$${(c.spend || 0).toLocaleString()}</td>
          <td class="cell-sub">${c.since || '—'}</td>
          <td class="text-right">
            <button class="btn-subtle" onclick="AstraApp.editCustomer('${c.id}')" title="Edit">
              <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>
            <button class="btn-subtle" onclick="AstraApp.deleteCustomer('${c.id}')" title="Delete">
              <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </td>
        </tr>
      `).join('');
    },

    saveCustomer(e) {
      e.preventDefault();
      const id = document.getElementById('customerId').value;
      const name = document.getElementById('custName').value.trim();
      const company = document.getElementById('custCompany').value.trim();
      const email = document.getElementById('custEmail').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const status = document.getElementById('custStatus').value;
      const spend = parseFloat(document.getElementById('custSpend').value) || 0;
      const notes = document.getElementById('custNotes').value.trim();

      if (!name || !company || !email) {
        this.showToast('Please fill all required customer fields.', 'warning');
        return;
      }

      if (id) {
        // Edit existing
        const index = appStore.data.customers.findIndex(c => c.id === id);
        if (index !== -1) {
          appStore.data.customers[index] = {
            ...appStore.data.customers[index],
            name, company, email, phone, status, spend, notes
          };
          this.showToast(`Updated customer: ${name}`, 'success');
        }
      } else {
        // Create new
        const newCust = {
          id: 'c-' + Date.now().toString(36),
          name, company, email, phone, status, spend, notes,
          since: getRelativeDate(0)
        };
        appStore.data.customers.unshift(newCust);
        this.showToast(`Added customer: ${name}`, 'success');
      }

      appStore.save();
      this.closeModal('customerModal');
      this.renderCustomers();
      this.updateSidebarBadges();
      if (this.currentView === 'overview') this.renderOverview();
    },

    editCustomer(id) {
      const c = appStore.data.customers.find(item => item.id === id);
      if (!c) return;

      document.getElementById('customerId').value = c.id;
      document.getElementById('custName').value = c.name;
      document.getElementById('custCompany').value = c.company;
      document.getElementById('custEmail').value = c.email;
      document.getElementById('custPhone').value = c.phone || '';
      document.getElementById('custStatus').value = c.status;
      document.getElementById('custSpend').value = c.spend || 0;
      document.getElementById('custNotes').value = c.notes || '';

      document.getElementById('customerModalTitle').textContent = 'Edit Customer Details';
      this.openModal('customerModal');
    },

    deleteCustomer(id) {
      const c = appStore.data.customers.find(item => item.id === id);
      if (!c) return;
      if (confirm(`Are you sure you want to delete ${c.name} (${c.company})?`)) {
        appStore.data.customers = appStore.data.customers.filter(item => item.id !== id);
        appStore.save();
        this.renderCustomers();
        this.updateSidebarBadges();
        this.showToast('Customer deleted.', 'info');
      }
    },

    // =========================================================================
    // 5. LEAD TRACKING (PIPELINE)
    // =========================================================================
    toggleLeadView(mode) {
      this.leadViewMode = mode;
      document.getElementById('leadViewKanbanBtn')?.classList.toggle('active', mode === 'kanban');
      document.getElementById('leadViewListBtn')?.classList.toggle('active', mode === 'list');

      document.getElementById('leadKanbanContainer')?.classList.toggle('hidden', mode !== 'kanban');
      document.getElementById('leadListContainer')?.classList.toggle('hidden', mode !== 'list');
      this.renderLeads();
    },

    renderLeads(query = '') {
      const leads = appStore.data.leads;
      const countEl = document.getElementById('leadTotalCount');
      const valEl = document.getElementById('leadWeightedValue');

      if (countEl) countEl.textContent = leads.length;
      if (valEl) {
        const weighted = leads.reduce((acc, l) => {
          const weights = { new: 0.2, contacted: 0.35, proposal: 0.6, negotiation: 0.8, won: 1.0, lost: 0 };
          return acc + (l.value * (weights[l.stage] || 0.2));
        }, 0);
        valEl.textContent = `$${Math.round(weighted).toLocaleString()}`;
      }

      if (this.leadViewMode === 'kanban') {
        this.renderKanbanLeads(leads, query);
      } else {
        this.renderListLeads(leads, query);
      }
    },

    renderKanbanLeads(leads, query) {
      const stages = ['new', 'contacted', 'proposal', 'negotiation', 'won'];

      stages.forEach(stage => {
        const area = document.getElementById(`kanban-${stage}`);
        const countBadge = document.getElementById(`countStage-${stage}`);
        if (!area) return;

        const stageLeads = leads.filter(l => {
          const matchesStage = l.stage === stage;
          const matchesQuery = !query ||
            l.title.toLowerCase().includes(query) ||
            l.company.toLowerCase().includes(query) ||
            (l.contact && l.contact.toLowerCase().includes(query));
          return matchesStage && matchesQuery;
        });

        if (countBadge) countBadge.textContent = stageLeads.length;

        area.innerHTML = stageLeads.map(lead => `
          <div class="lead-card" draggable="true" ondragstart="AstraApp.onLeadDragStart(event, '${lead.id}')">
            <div class="lead-card-header">
              <span class="lead-card-title">${escapeHTML(lead.title)}</span>
              <span class="priority-tag priority-${lead.priority}">${lead.priority}</span>
            </div>
            <div class="lead-card-company">🏢 ${escapeHTML(lead.company)}</div>
            <div class="lead-card-value">$${lead.value.toLocaleString()}</div>
            <div class="lead-card-footer">
              <span>👤 ${escapeHTML(lead.contact || 'No contact')}</span>
              <div class="lead-card-actions">
                <button class="btn-subtle" onclick="AstraApp.editLead('${lead.id}')" title="Edit Deal">✎</button>
                <button class="btn-subtle" onclick="AstraApp.deleteLead('${lead.id}')" title="Delete Deal">✕</button>
              </div>
            </div>
            <div class="lead-stage-shift">
              ${this.renderStageShiftButtons(lead)}
            </div>
          </div>
        `).join('');

        // Setup drop area
        area.ondragover = (e) => { e.preventDefault(); };
        area.ondrop = (e) => {
          e.preventDefault();
          const leadId = e.dataTransfer.getData('text/plain');
          AstraApp.moveLeadStage(leadId, stage);
        };
      });
    },

    renderStageShiftButtons(lead) {
      const stages = ['new', 'contacted', 'proposal', 'negotiation', 'won'];
      const curIdx = stages.indexOf(lead.stage);
      const prev = curIdx > 0 ? stages[curIdx - 1] : null;
      const next = curIdx < stages.length - 1 ? stages[curIdx + 1] : null;

      let html = '<div style="display: flex; justify-content: space-between; margin-top: 4px;">';
      if (prev) {
        html += `<button class="text-btn" onclick="AstraApp.moveLeadStage('${lead.id}', '${prev}')">&larr; ${prev}</button>`;
      } else {
        html += '<span></span>';
      }
      if (next) {
        html += `<button class="text-btn" onclick="AstraApp.moveLeadStage('${lead.id}', '${next}')">${next} &rarr;</button>`;
      }
      html += '</div>';
      return html;
    },

    onLeadDragStart(e, leadId) {
      e.dataTransfer.setData('text/plain', leadId);
    },

    moveLeadStage(leadId, newStage) {
      const lead = appStore.data.leads.find(l => l.id === leadId);
      if (!lead || lead.stage === newStage) return;

      lead.stage = newStage;
      appStore.save();
      this.renderLeads();
      this.updateSidebarBadges();
      this.showToast(`Moved "${lead.title}" to ${newStage.toUpperCase()}`, 'success');
      if (this.currentView === 'overview') this.renderOverview();
    },

    renderListLeads(leads, query) {
      const tbody = document.getElementById('leadTableBody');
      if (!tbody) return;

      const filtered = leads.filter(l => {
        return !query ||
          l.title.toLowerCase().includes(query) ||
          l.company.toLowerCase().includes(query) ||
          (l.contact && l.contact.toLowerCase().includes(query));
      });

      tbody.innerHTML = filtered.map(l => `
        <tr>
          <td>
            <div class="cell-primary">${escapeHTML(l.title)}</div>
            <div class="cell-sub">Source: ${escapeHTML(l.source || 'Direct')}</div>
          </td>
          <td>
            <div>${escapeHTML(l.company)}</div>
            <div class="cell-sub">${escapeHTML(l.contact || '—')}</div>
          </td>
          <td><span class="status-pill status-${l.stage}">${l.stage}</span></td>
          <td class="cell-primary text-cyan">$${l.value.toLocaleString()}</td>
          <td><span class="priority-tag priority-${l.priority}">${l.priority}</span></td>
          <td class="cell-sub">${l.closeDate || '—'}</td>
          <td class="text-right">
            <button class="btn-subtle" onclick="AstraApp.editLead('${l.id}')">Edit</button>
            <button class="btn-subtle" onclick="AstraApp.deleteLead('${l.id}')">Delete</button>
          </td>
        </tr>
      `).join('');
    },

    saveLead(e) {
      e.preventDefault();
      const id = document.getElementById('leadId').value;
      const title = document.getElementById('leadTitle').value.trim();
      const company = document.getElementById('leadCompany').value.trim();
      const contact = document.getElementById('leadContact').value.trim();
      const value = parseFloat(document.getElementById('leadValue').value) || 0;
      const stage = document.getElementById('leadStage').value;
      const priority = document.getElementById('leadPriority').value;
      const source = document.getElementById('leadSource').value;
      const closeDate = document.getElementById('leadCloseDate').value;

      if (!title || !company || value <= 0) {
        this.showToast('Please specify a title, company, and valid deal value.', 'warning');
        return;
      }

      if (id) {
        const idx = appStore.data.leads.findIndex(l => l.id === id);
        if (idx !== -1) {
          appStore.data.leads[idx] = {
            ...appStore.data.leads[idx],
            title, company, contact, value, stage, priority, source, closeDate
          };
          this.showToast(`Updated deal: ${title}`, 'success');
        }
      } else {
        const newLead = {
          id: 'l-' + Date.now().toString(36),
          title, company, contact, value, stage, priority, source, closeDate
        };
        appStore.data.leads.unshift(newLead);
        this.showToast(`Created new deal: ${title}`, 'success');
      }

      appStore.save();
      this.closeModal('leadModal');
      this.renderLeads();
      this.updateSidebarBadges();
      if (this.currentView === 'overview') this.renderOverview();
    },

    editLead(id) {
      const l = appStore.data.leads.find(item => item.id === id);
      if (!l) return;

      document.getElementById('leadId').value = l.id;
      document.getElementById('leadTitle').value = l.title;
      document.getElementById('leadCompany').value = l.company;
      document.getElementById('leadContact').value = l.contact || '';
      document.getElementById('leadValue').value = l.value;
      document.getElementById('leadStage').value = l.stage;
      document.getElementById('leadPriority').value = l.priority;
      document.getElementById('leadSource').value = l.source;
      document.getElementById('leadCloseDate').value = l.closeDate || '';

      document.getElementById('leadModalTitle').textContent = 'Edit Deal Details';
      this.openModal('leadModal');
    },

    deleteLead(id) {
      const l = appStore.data.leads.find(item => item.id === id);
      if (!l) return;
      if (confirm(`Delete deal "${l.title}"?`)) {
        appStore.data.leads = appStore.data.leads.filter(item => item.id !== id);
        appStore.save();
        this.renderLeads();
        this.updateSidebarBadges();
        this.showToast('Deal removed from pipeline.', 'info');
      }
    },

    // =========================================================================
    // 6. APPOINTMENT MANAGEMENT
    // =========================================================================
    apptFilter: 'all',

    filterAppointments(filter, btn) {
      this.apptFilter = filter;
      document.querySelectorAll('#view-appointments .filter-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      this.renderAppointments();
    },

    renderAppointments(query = '') {
      const grid = document.getElementById('appointmentCardsGrid');
      const emptyState = document.getElementById('appointmentEmptyState');
      if (!grid) return;

      const appts = appStore.data.appointments;
      const todayStr = getRelativeDate(0);

      const filtered = appts.filter(a => {
        let matchesFilter = true;
        if (this.apptFilter === 'upcoming') {
          matchesFilter = a.date >= todayStr && a.status === 'scheduled';
        } else if (this.apptFilter === 'today') {
          matchesFilter = a.date === todayStr;
        } else if (this.apptFilter === 'completed') {
          matchesFilter = a.status === 'completed';
        }

        const matchesQuery = !query ||
          a.title.toLowerCase().includes(query) ||
          a.client.toLowerCase().includes(query) ||
          (a.company && a.company.toLowerCase().includes(query)) ||
          a.type.toLowerCase().includes(query);

        return matchesFilter && matchesQuery;
      });

      if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState?.classList.remove('hidden');
        return;
      }

      emptyState?.classList.add('hidden');
      grid.innerHTML = filtered.map(a => `
        <div class="appointment-card glass-card">
          <div class="appt-top">
            <div>
              <div class="appt-title">${escapeHTML(a.title)}</div>
              <div class="appt-client">👤 ${escapeHTML(a.client)} ${a.company ? `(${escapeHTML(a.company)})` : ''}</div>
            </div>
            <span class="status-pill status-${a.status === 'completed' ? 'won' : 'prospect'}">
              ${a.status}
            </span>
          </div>

          <div class="appt-meta-row">
            <span>📅 ${a.date}</span>
            <span>⏰ ${a.time}</span>
            <span>📍 ${escapeHTML(a.platform)}</span>
          </div>

          ${a.notes ? `<div style="font-size: 0.75rem; color: var(--text-muted); background: var(--bg-surface-elevated); padding: 0.5rem; border-radius: 6px;">${escapeHTML(a.notes)}</div>` : ''}

          <div class="appt-actions">
            <span class="badge badge-accent">${escapeHTML(a.type)}</span>
            <div style="display: flex; gap: 0.35rem;">
              ${a.status !== 'completed' ? `<button class="btn-subtle" onclick="AstraApp.toggleAppointmentStatus('${a.id}')" title="Mark Done">✓ Done</button>` : ''}
              <button class="btn-subtle" onclick="AstraApp.deleteAppointment('${a.id}')" title="Cancel">✕</button>
            </div>
          </div>
        </div>
      `).join('');
    },

    saveAppointment(e) {
      e.preventDefault();
      const title = document.getElementById('apptTitle').value.trim();
      const client = document.getElementById('apptClient').value.trim();
      const company = document.getElementById('apptCompany').value.trim();
      const date = document.getElementById('apptDate').value;
      const time = document.getElementById('apptTime').value;
      const type = document.getElementById('apptType').value;
      const platform = document.getElementById('apptPlatform').value;
      const notes = document.getElementById('apptNotes').value.trim();

      if (!title || !client || !date || !time) {
        this.showToast('Please fill all required appointment fields.', 'warning');
        return;
      }

      const newAppt = {
        id: 'a-' + Date.now().toString(36),
        title, client, company, date, time, type, platform, notes,
        status: 'scheduled'
      };

      appStore.data.appointments.unshift(newAppt);
      appStore.save();
      this.closeModal('appointmentModal');
      this.renderAppointments();
      this.updateSidebarBadges();
      this.showToast(`Meeting booked with ${client}`, 'success');
      if (this.currentView === 'overview') this.renderOverview();
    },

    toggleAppointmentStatus(id) {
      const a = appStore.data.appointments.find(item => item.id === id);
      if (!a) return;
      a.status = a.status === 'completed' ? 'scheduled' : 'completed';
      appStore.save();
      this.renderAppointments();
      this.updateSidebarBadges();
      this.showToast(`Meeting marked as ${a.status}.`, 'info');
    },

    deleteAppointment(id) {
      if (confirm('Cancel and remove this scheduled appointment?')) {
        appStore.data.appointments = appStore.data.appointments.filter(item => item.id !== id);
        appStore.save();
        this.renderAppointments();
        this.updateSidebarBadges();
        this.showToast('Appointment cancelled.', 'info');
      }
    },

    // =========================================================================
    // 7. PAYMENT & INVOICE TRACKING
    // =========================================================================
    payFilter: 'all',

    filterPayments(filter, btn) {
      this.payFilter = filter;
      document.querySelectorAll('#view-payments .filter-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      this.renderPayments();
    },

    renderPayments(query = '') {
      const tbody = document.getElementById('paymentTableBody');
      const emptyState = document.getElementById('paymentEmptyState');
      if (!tbody) return;

      const payments = appStore.data.payments;

      // Summary metrics
      const totalCollected = payments.filter(p => p.status === 'paid').reduce((s, p) => s + p.amount, 0);
      const pendingList = payments.filter(p => p.status === 'pending');
      const totalPending = pendingList.reduce((s, p) => s + p.amount, 0);
      const overdueList = payments.filter(p => p.status === 'overdue');
      const totalOverdue = overdueList.reduce((s, p) => s + p.amount, 0);

      document.getElementById('financeTotalCollected').textContent = `$${totalCollected.toLocaleString()}`;
      document.getElementById('financeTotalPending').textContent = `$${totalPending.toLocaleString()}`;
      document.getElementById('financePendingCount').textContent = `${pendingList.length} invoice${pendingList.length === 1 ? '' : 's'} awaiting payment`;
      document.getElementById('financeTotalOverdue').textContent = `$${totalOverdue.toLocaleString()}`;
      document.getElementById('financeOverdueCount').textContent = `${overdueList.length} invoice${overdueList.length === 1 ? '' : 's'} require urgent action`;

      const filtered = payments.filter(p => {
        const matchesFilter = this.payFilter === 'all' || p.status === this.payFilter;
        const matchesQuery = !query ||
          p.invoiceNum.toLowerCase().includes(query) ||
          p.client.toLowerCase().includes(query) ||
          (p.method && p.method.toLowerCase().includes(query));
        return matchesFilter && matchesQuery;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = '';
        emptyState?.classList.remove('hidden');
        return;
      }

      emptyState?.classList.add('hidden');
      tbody.innerHTML = filtered.map(p => `
        <tr>
          <td>
            <div class="cell-primary">${escapeHTML(p.invoiceNum)}</div>
            <div class="cell-sub">${escapeHTML(p.description || 'General Service')}</div>
          </td>
          <td>${escapeHTML(p.client)}</td>
          <td class="cell-primary text-emerald">$${p.amount.toLocaleString()}</td>
          <td class="cell-sub">${p.dueDate}</td>
          <td><span class="badge">${escapeHTML(p.method)}</span></td>
          <td>
            <span class="status-pill status-${p.status}">
              ${p.status}
            </span>
          </td>
          <td class="text-right">
            ${p.status !== 'paid' ? `<button class="btn-subtle" onclick="AstraApp.markPaymentPaid('${p.id}')">Mark Paid</button>` : ''}
            <button class="btn-subtle" onclick="AstraApp.deletePayment('${p.id}')">✕</button>
          </td>
        </tr>
      `).join('');
    },

    savePayment(e) {
      e.preventDefault();
      const invoiceNum = document.getElementById('payInvoiceNum').value.trim();
      const client = document.getElementById('payClient').value.trim();
      const amount = parseFloat(document.getElementById('payAmount').value) || 0;
      const status = document.getElementById('payStatus').value;
      const dueDate = document.getElementById('payDueDate').value;
      const method = document.getElementById('payMethod').value;
      const description = document.getElementById('payDescription').value.trim();

      if (!invoiceNum || !client || amount <= 0 || !dueDate) {
        this.showToast('Please enter invoice ID, client, valid amount, and due date.', 'warning');
        return;
      }

      const newPay = {
        id: 'p-' + Date.now().toString(36),
        invoiceNum, client, amount, status, dueDate, method, description
      };

      appStore.data.payments.unshift(newPay);
      appStore.save();
      this.closeModal('paymentModal');
      this.renderPayments();
      this.updateSidebarBadges();
      this.showToast(`Invoice ${invoiceNum} recorded successfully.`, 'success');
      if (this.currentView === 'overview') this.renderOverview();
    },

    markPaymentPaid(id) {
      const p = appStore.data.payments.find(item => item.id === id);
      if (!p) return;
      p.status = 'paid';
      appStore.save();
      this.renderPayments();
      this.updateSidebarBadges();
      this.showToast(`Invoice ${p.invoiceNum} marked as PAID.`, 'success');
      if (this.currentView === 'overview') this.renderOverview();
    },

    deletePayment(id) {
      if (confirm('Delete this invoice record?')) {
        appStore.data.payments = appStore.data.payments.filter(item => item.id !== id);
        appStore.save();
        this.renderPayments();
        this.updateSidebarBadges();
        this.showToast('Invoice deleted.', 'info');
      }
    },

    // =========================================================================
    // 8. FOLLOW-UP TASKS
    // =========================================================================
    taskFilter: 'all',

    filterTasks(filter, btn) {
      this.taskFilter = filter;
      document.querySelectorAll('#view-tasks .filter-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      this.renderTasks();
    },

    renderTasks(query = '') {
      const listEl = document.getElementById('taskListContainer');
      const emptyState = document.getElementById('taskEmptyState');
      const countAll = document.getElementById('taskCountAll');
      const countPend = document.getElementById('taskCountPending');
      if (!listEl) return;

      const tasks = appStore.data.tasks;
      if (countAll) countAll.textContent = tasks.length;
      if (countPend) countPend.textContent = tasks.filter(t => !t.completed).length;

      const filtered = tasks.filter(t => {
        let matchesFilter = true;
        if (this.taskFilter === 'pending') matchesFilter = !t.completed;
        else if (this.taskFilter === 'completed') matchesFilter = t.completed;
        else if (this.taskFilter === 'urgent') matchesFilter = !t.completed && (t.priority === 'urgent' || t.priority === 'high');

        const matchesQuery = !query ||
          t.title.toLowerCase().includes(query) ||
          (t.category && t.category.toLowerCase().includes(query)) ||
          (t.related && t.related.toLowerCase().includes(query));

        return matchesFilter && matchesQuery;
      });

      if (filtered.length === 0) {
        listEl.innerHTML = '';
        emptyState?.classList.remove('hidden');
        return;
      }

      emptyState?.classList.add('hidden');
      listEl.innerHTML = filtered.map(t => `
        <div class="task-item ${t.completed ? 'completed' : ''}">
          <div class="task-left">
            <input type="checkbox" class="task-checkbox" ${t.completed ? 'checked' : ''} onchange="AstraApp.toggleTask('${t.id}')">
            <div class="task-info">
              <div class="task-text">${escapeHTML(t.title)}</div>
              <div class="task-sub">
                <span>📁 ${escapeHTML(t.category || 'General')}</span>
                <span>📅 Due: ${t.dueDate || 'Flexible'}</span>
                ${t.related ? `<span>🔗 ${escapeHTML(t.related)}</span>` : ''}
              </div>
            </div>
          </div>
          <div class="task-right">
            <span class="priority-tag priority-${t.priority}">${t.priority}</span>
            <button class="btn-subtle" onclick="AstraApp.deleteTask('${t.id}')" title="Delete">✕</button>
          </div>
        </div>
      `).join('');
    },

    addQuickTask() {
      const input = document.getElementById('quickTaskInput');
      const prioritySelect = document.getElementById('quickTaskPriority');
      if (!input || !input.value.trim()) return;

      const newTask = {
        id: 't-' + Date.now().toString(36),
        title: input.value.trim(),
        priority: prioritySelect?.value || 'medium',
        category: 'Follow-up',
        dueDate: getRelativeDate(1),
        related: 'General',
        completed: false
      };

      appStore.data.tasks.unshift(newTask);
      appStore.save();
      input.value = '';
      this.renderTasks();
      this.updateSidebarBadges();
      this.showToast('Task added.', 'success');
      if (this.currentView === 'overview') this.renderOverview();
    },

    saveTask(e) {
      e.preventDefault();
      const title = document.getElementById('taskTitle').value.trim();
      const priority = document.getElementById('taskPriority').value;
      const category = document.getElementById('taskCategory').value;
      const dueDate = document.getElementById('taskDueDate').value;
      const related = document.getElementById('taskRelated').value.trim();

      if (!title) {
        this.showToast('Please provide a task description.', 'warning');
        return;
      }

      const newTask = {
        id: 't-' + Date.now().toString(36),
        title, priority, category,
        dueDate: dueDate || getRelativeDate(1),
        related: related || 'General',
        completed: false
      };

      appStore.data.tasks.unshift(newTask);
      appStore.save();
      this.closeModal('taskModal');
      this.renderTasks();
      this.updateSidebarBadges();
      this.showToast('Task created successfully.', 'success');
      if (this.currentView === 'overview') this.renderOverview();
    },

    toggleTask(id) {
      const t = appStore.data.tasks.find(item => item.id === id);
      if (!t) return;
      t.completed = !t.completed;
      appStore.save();
      this.renderTasks();
      this.updateSidebarBadges();
      if (this.currentView === 'overview') this.renderOverview();
    },

    deleteTask(id) {
      appStore.data.tasks = appStore.data.tasks.filter(t => t.id !== id);
      appStore.save();
      this.renderTasks();
      this.updateSidebarBadges();
      this.showToast('Task deleted.', 'info');
      if (this.currentView === 'overview') this.renderOverview();
    },

    // =========================================================================
    // 9. SALES ANALYTICS & CANVAS CHARTS
    // =========================================================================
    initCharts() {
      // Lazy render canvas charts
      setTimeout(() => {
        this.renderMiniRevenueChart();
        if (this.currentView === 'analytics') {
          this.renderAnalyticsCharts();
        }
      }, 50);
    },

    renderAnalytics() {
      this.renderAnalyticsCharts();
      this.renderFunnel();
      this.renderSources();
    },

    renderAnalyticsCharts() {
      this.render12MonthRevenueChart();
      this.renderServiceDonutChart();
    },

    // Mini overview chart (Canvas)
    renderMiniRevenueChart() {
      const canvas = document.getElementById('miniRevenueChart');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Data
      const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov (Est)'];
      const revenue = [42, 54, 61, 72, 79, 84];
      const target = [50, 55, 60, 68, 75, 80];

      const maxVal = 100;
      const padLeft = 40;
      const padRight = 20;
      const padTop = 20;
      const padBottom = 30;
      const plotW = w - padLeft - padRight;
      const plotH = h - padTop - padBottom;

      // Draw Gridlines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = padTop + (plotH / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padLeft, y);
        ctx.lineTo(w - padRight, y);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '10px -apple-system, sans-serif';
        ctx.fillText(`$${maxVal - i * 25}k`, 4, y + 3);
      }

      // Draw X axis labels
      labels.forEach((label, i) => {
        const x = padLeft + (plotW / (labels.length - 1)) * i;
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, h - 8);
      });

      // Draw Target Line (Purple dashed)
      ctx.save();
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      target.forEach((v, i) => {
        const x = padLeft + (plotW / (labels.length - 1)) * i;
        const y = padTop + plotH - (v / maxVal) * plotH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.restore();

      // Draw Revenue Line with Gradient Fill (Cyan)
      const grad = ctx.createLinearGradient(0, padTop, 0, h - padBottom);
      grad.addColorStop(0, 'rgba(6, 182, 212, 0.35)');
      grad.addColorStop(1, 'rgba(6, 182, 212, 0.0)');

      ctx.beginPath();
      revenue.forEach((v, i) => {
        const x = padLeft + (plotW / (labels.length - 1)) * i;
        const y = padTop + plotH - (v / maxVal) * plotH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.lineTo(padLeft + plotW, padTop + plotH);
      ctx.lineTo(padLeft, padTop + plotH);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Line stroke
      ctx.beginPath();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 3;
      revenue.forEach((v, i) => {
        const x = padLeft + (plotW / (labels.length - 1)) * i;
        const y = padTop + plotH - (v / maxVal) * plotH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Dots
      revenue.forEach((v, i) => {
        const x = padLeft + (plotW / (labels.length - 1)) * i;
        const y = padTop + plotH - (v / maxVal) * plotH;
        ctx.fillStyle = '#06b6d4';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0a0d14';
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    },

    // 12-Month Revenue Canvas
    render12MonthRevenueChart() {
      const canvas = document.getElementById('analyticsRevenueChart');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const months = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
      const rev = [45, 48, 52, 60, 64, 71, 75, 80, 83, 89, 94, 98];

      const padL = 40, padR = 20, padT = 20, padB = 30;
      const pw = w - padL - padR;
      const ph = h - padT - padB;
      const max = 120;

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = padT + (ph / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padL, y);
        ctx.lineTo(w - padR, y);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '10px -apple-system, sans-serif';
        ctx.fillText(`$${max - i * 30}k`, 4, y + 3);
      }

      // Bars
      const barW = (pw / months.length) * 0.6;
      months.forEach((m, i) => {
        const x = padL + (pw / months.length) * i + (pw / months.length - barW) / 2;
        const barH = (rev[i] / max) * ph;
        const y = padT + ph - barH;

        // Bar gradient
        const bgGrad = ctx.createLinearGradient(0, y, 0, padT + ph);
        bgGrad.addColorStop(0, '#06b6d4');
        bgGrad.addColorStop(1, 'rgba(99, 102, 241, 0.3)');

        ctx.fillStyle = bgGrad;
        ctx.beginPath();
        ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
        ctx.fill();

        // Month label
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(m, x + barW / 2, h - 8);
      });
    },

    // Donut chart Canvas
    renderServiceDonutChart() {
      const canvas = document.getElementById('analyticsDonutChart');
      const legend = document.getElementById('donutLegend');
      if (!canvas || !legend) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const slices = [
        { label: 'SaaS Platform Subscriptions', value: 45, color: '#06b6d4' },
        { label: 'Enterprise Managed Retainers', value: 30, color: '#6366f1' },
        { label: 'AI Advisory & Audits', value: 15, color: '#a855f7' },
        { label: 'Custom Integration SLAs', value: 10, color: '#10b981' }
      ];

      const cx = w / 2;
      const cy = h / 2;
      const radius = 80;
      const innerRadius = 52;
      let startAngle = -Math.PI / 2;

      slices.forEach(slice => {
        const sliceAngle = (slice.value / 100) * (Math.PI * 2);
        const endAngle = startAngle + sliceAngle;

        ctx.beginPath();
        ctx.arc(cx, cy, radius, startAngle, endAngle);
        ctx.arc(cx, cy, innerRadius, endAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = slice.color;
        ctx.fill();

        startAngle = endAngle;
      });

      // Center text
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 15px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('$84.3k', cx, cy - 2);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px -apple-system, sans-serif';
      ctx.fillText('ARR Monthly', cx, cy + 14);

      // Legend
      legend.innerHTML = slices.map(s => `
        <div class="donut-legend-item">
          <span class="legend-dot" style="background:${s.color}"></span>
          <span>${s.label}</span>
          <span class="donut-legend-val">${s.value}%</span>
        </div>
      `).join('');
    },

    renderFunnel() {
      const container = document.getElementById('funnelContainer');
      if (!container) return;

      const funnelData = [
        { stage: '1. Inbound Leads / Inquiries', count: 48, pct: 100, color: 'var(--accent-cyan)' },
        { stage: '2. Qualified Opportunities', count: 34, pct: 71, color: 'var(--accent-indigo)' },
        { stage: '3. Technical Demos Delivered', count: 24, pct: 50, color: 'var(--accent-purple)' },
        { stage: '4. Executive Proposals Out', count: 16, pct: 33, color: 'var(--accent-amber)' },
        { stage: '5. Deals Closed Won', count: 11, pct: 23, color: 'var(--accent-emerald)' }
      ];

      container.innerHTML = funnelData.map(f => `
        <div class="funnel-row">
          <div class="funnel-row-info">
            <span>${f.stage}</span>
            <span><strong>${f.count}</strong> deals (${f.pct}%)</span>
          </div>
          <div class="funnel-bar-bg">
            <div class="funnel-bar-fill" style="width: ${f.pct}%; background: ${f.color};"></div>
          </div>
        </div>
      `).join('');
    },

    renderSources() {
      const container = document.getElementById('sourcesBreakdown');
      if (!container) return;

      const sources = [
        { name: 'Client Referrals & Network', pct: 38, count: '$54,100', color: 'var(--accent-emerald)' },
        { name: 'Direct Enterprise Outbound', pct: 28, count: '$39,800', color: 'var(--accent-cyan)' },
        { name: 'Website Inbound Organic', pct: 22, count: '$31,300', color: 'var(--accent-purple)' },
        { name: 'Industry Summits & Events', pct: 12, count: '$17,300', color: 'var(--accent-amber)' }
      ];

      container.innerHTML = sources.map(s => `
        <div class="source-row">
          <div class="source-row-info">
            <span>${s.name}</span>
            <span><strong>${s.count}</strong> (${s.pct}%)</span>
          </div>
          <div class="source-bar-bg">
            <div class="source-bar-fill" style="width: ${s.pct}%; background: ${s.color};"></div>
          </div>
        </div>
      `).join('');
    },

    // =========================================================================
    // 10. ASTRA AI ADVISOR & SMART DRAFTER
    // =========================================================================
    calculateBusinessHealth() {
      const d = appStore.data;
      const overduePayments = d.payments.filter(p => p.status === 'overdue');
      const pendingTasks = d.tasks.filter(t => !t.completed);
      const activeLeads = d.leads.filter(l => l.stage === 'negotiation' || l.stage === 'proposal');

      let score = 85;

      // Penalties & bonuses
      if (overduePayments.length === 0) score += 8;
      else score -= overduePayments.length * 6;

      if (activeLeads.length >= 3) score += 7;
      if (pendingTasks.length > 8) score -= 5;

      score = Math.max(10, Math.min(99, score));

      let rating = 'Optimal';
      let summary = 'Strong performance across lead pipeline and accounts receivable.';
      if (score < 70) {
        rating = 'Needs Attention';
        summary = 'Overdue receivables or lagging lead follow-ups detected. Immediate touchpoint recommended.';
      } else if (score < 85) {
        rating = 'Stable';
        summary = 'Operations on schedule. Clear outstanding tasks to boost conversion velocity.';
      }

      return { score, rating, summary };
    },

    renderAiAdvisor() {
      const health = this.calculateBusinessHealth();
      const scoreNum = document.getElementById('aiHealthScoreNumber');
      const metricCash = document.getElementById('aiMetricCashflow');
      const metricVelo = document.getElementById('aiMetricVelocity');
      const metricTasks = document.getElementById('aiMetricTasks');

      if (scoreNum) scoreNum.textContent = health.score;

      const d = appStore.data;
      const overdue = d.payments.filter(p => p.status === 'overdue');
      if (metricCash) {
        metricCash.textContent = overdue.length === 0 ? 'Optimal (0 Overdue)' : `Alert ($${overdue.reduce((s, p) => s + p.amount, 0).toLocaleString()} Overdue)`;
        metricCash.className = overdue.length === 0 ? 'text-emerald' : 'text-rose';
      }

      const pipeVal = d.leads.filter(l => l.stage !== 'lost').reduce((s, l) => s + l.value, 0);
      if (metricVelo) {
        metricVelo.textContent = `$${(pipeVal / 1000).toFixed(0)}k Pipeline`;
      }

      const totalTasks = d.tasks.length || 1;
      const doneTasks = d.tasks.filter(t => t.completed).length;
      const taskPct = Math.round((doneTasks / totalTasks) * 100);
      if (metricTasks) {
        metricTasks.textContent = `${taskPct}% Completed (${d.tasks.filter(t => !t.completed).length} open)`;
      }

      // Generate Strategic Insights
      this.renderAiInsights();

      // Populate Drafter Selects
      this.populateDrafterTargets();
      this.generateAiDraft();
    },

    renderAiInsights() {
      const container = document.getElementById('aiInsightsList');
      if (!container) return;

      const d = appStore.data;
      const insights = [];

      // Check overdue invoices
      const overdue = d.payments.filter(p => p.status === 'overdue');
      if (overdue.length > 0) {
        const topOverdue = overdue[0];
        insights.push({
          type: 'alert',
          title: `Overdue Payment Risk: ${topOverdue.client}`,
          desc: `Invoice #${topOverdue.invoiceNum} for $${topOverdue.amount.toLocaleString()} is past due. Recommendation: Send our Polite Invoice Reminder draft today.`
        });
      }

      // Check negotiation leads
      const negotiationLeads = d.leads.filter(l => l.stage === 'negotiation');
      if (negotiationLeads.length > 0) {
        const topDeal = negotiationLeads[0];
        insights.push({
          type: 'warning',
          title: `High-Yield Closing Opportunity: ${topDeal.company}`,
          desc: `Deal "${topDeal.title}" ($${topDeal.value.toLocaleString()}) is currently in negotiation. Follow up before Friday to lock in Q4 revenue targets.`
        });
      }

      // Meeting density check
      const todayStr = getRelativeDate(0);
      const todayMeetings = d.appointments.filter(a => a.date === todayStr);
      insights.push({
        type: 'info',
        title: `Daily Schedule Load: ${todayMeetings.length} Meeting(s)`,
        desc: todayMeetings.length > 0
          ? `Focus session recommended before 2:00 PM prior to client presentations.`
          : `Clear afternoon calendar detected. Optimal time for pipeline outreach or strategic planning.`
      });

      container.innerHTML = insights.map(ins => `
        <div class="insight-card ${ins.type}">
          <div class="insight-title">
            <span>${escapeHTML(ins.title)}</span>
          </div>
          <div class="insight-desc">${escapeHTML(ins.desc)}</div>
        </div>
      `).join('');
    },

    populateDrafterTargets() {
      const select = document.getElementById('drafterTargetSelect');
      if (!select) return;

      const customers = appStore.data.customers;
      const leads = appStore.data.leads;

      let html = '<optgroup label="Enterprise Clients">';
      html += customers.map(c => `<option value="cust_${c.id}">${escapeHTML(c.name)} — ${escapeHTML(c.company)}</option>`).join('');
      html += '</optgroup>';

      html += '<optgroup label="Sales Pipeline Deals">';
      html += leads.map(l => `<option value="lead_${l.id}">${escapeHTML(l.title)} (${escapeHTML(l.company)})</option>`).join('');
      html += '</optgroup>';

      select.innerHTML = html;
    },

    setDraftTone(tone, btn) {
      this.selectedTone = tone;
      document.querySelectorAll('.tone-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.generateAiDraft();
    },

    onDrafterTargetChange() {
      this.generateAiDraft();
    },

    generateAiDraft() {
      const targetVal = document.getElementById('drafterTargetSelect')?.value;
      const template = document.getElementById('drafterTemplateSelect')?.value || 'followup';
      const output = document.getElementById('aiDraftOutput');
      if (!output) return;

      let contactName = 'Valued Partner';
      let companyName = 'Your Organization';
      let amountOrValue = '$25,000';

      if (targetVal) {
        if (targetVal.startsWith('cust_')) {
          const id = targetVal.replace('cust_', '');
          const c = appStore.data.customers.find(item => item.id === id);
          if (c) {
            contactName = c.name;
            companyName = c.company;
            amountOrValue = c.spend ? `$${c.spend.toLocaleString()}` : '$15,000';
          }
        } else if (targetVal.startsWith('lead_')) {
          const id = targetVal.replace('lead_', '');
          const l = appStore.data.leads.find(item => item.id === id);
          if (l) {
            contactName = l.contact || 'Team';
            companyName = l.company;
            amountOrValue = `$${l.value.toLocaleString()}`;
          }
        }
      }

      const tone = this.selectedTone;
      let draft = '';

      if (template === 'followup') {
        if (tone === 'professional') {
          draft = `Dear ${contactName},\n\nI hope this message finds you well.\n\nFollowing our discussion regarding the enterprise initiatives at ${companyName}, I wanted to touch base regarding the proposal we delivered. We have structured our implementation roadmap to ensure seamless integration and rapid ROI for your team.\n\nCould we allocate 15 minutes this Thursday to address any outstanding questions or contract modifications?\n\nSincerely,\nAstra Business Operations`;
        } else if (tone === 'friendly') {
          draft = `Hi ${contactName},\n\nHope you're having an awesome week!\n\nJust checking in on the proposal we shared for ${companyName}. Our technical leads are really excited about working together on this project.\n\nLet me know if you'd like to jump on a quick call or if there's any info I can get over to you.\n\nBest regards,\nAstra Business Operations`;
        } else {
          draft = `Hi ${contactName},\n\nFollowing up on the ${amountOrValue} proposal submitted for ${companyName}. Please let us know if the current scope and terms align with your Q4 timelines so we can reserve onboarding engineering capacity.\n\nThanks,\nAstra Business Operations`;
        }
      } else if (template === 'invoice') {
        if (tone === 'professional') {
          draft = `Dear ${contactName},\n\nWe appreciate our ongoing partnership with ${companyName}. This is a polite notification that our accounting system indicates an open balance requiring your attention.\n\nKindly confirm payment processing for invoice reference at your earliest convenience. Please let us know if you require an updated statement or revised payment routing.\n\nWarm regards,\nAstra Accounts Receivable`;
        } else {
          draft = `Attention: ${contactName} / Finance Department,\n\nOur records show an outstanding invoice balance associated with ${companyName}. Please verify status of settlement with your treasury department today to ensure continuous service without interruption.\n\nRegards,\nAstra Accounts Receivable`;
        }
      } else if (template === 'onboarding') {
        draft = `Dear ${contactName},\n\nWelcome to Astra Business AI! We are thrilled to partner with ${companyName}.\n\nOur dedicated onboarding engineering team has provisioned your corporate environment. Attached you will find your master access credentials, kickoff roadmap, and direct escalation contacts.\n\nWe look forward to our onboarding session.\n\nBest regards,\nAstra Client Success`;
      } else if (template === 'meeting_recap') {
        draft = `Hi ${contactName},\n\nThank you for taking the time to meet today regarding ${companyName}'s strategic goals. Below is a concise recap of our agreed action items:\n\n1. Astra Team will deliver the technical architecture specifications.\n2. ${companyName} team will confirm stakeholder review schedule.\n3. Follow-up synchronization scheduled for next week.\n\nBest regards,\nAstra Operations`;
      } else {
        draft = `Dear ${contactName},\n\nIt has been some time since our last collaboration with ${companyName}. We have recently released significant performance updates to our platform and would welcome the opportunity to reconnect on your current strategic priorities.\n\nSincerely,\nAstra Business`;
      }

      output.value = draft;
    },

    copyDraftText() {
      const output = document.getElementById('aiDraftOutput');
      const copyBtnText = document.getElementById('copyBtnText');
      if (!output) return;

      navigator.clipboard.writeText(output.value).then(() => {
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        this.showToast('Email draft copied to clipboard.', 'success');
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy to Clipboard';
        }, 2000);
      }).catch(() => {
        output.select();
        document.execCommand('copy');
        this.showToast('Email draft copied.', 'success');
      });
    },

    createTaskFromDraft() {
      const targetVal = document.getElementById('drafterTargetSelect')?.value || '';
      let related = 'General';
      if (targetVal.startsWith('cust_')) {
        const c = appStore.data.customers.find(item => item.id === targetVal.replace('cust_', ''));
        if (c) related = c.name;
      }

      const newTask = {
        id: 't-' + Date.now().toString(36),
        title: `Dispatch generated follow-up correspondence to ${related}`,
        priority: 'high',
        category: 'Follow-up',
        dueDate: getRelativeDate(0),
        related: related,
        completed: false
      };

      appStore.data.tasks.unshift(newTask);
      appStore.save();
      this.updateSidebarBadges();
      this.showToast('Follow-up task created in your Task Manager.', 'success');
    },

    runAiAudit() {
      this.showToast('Running Astra on-device business audit...', 'info');
      setTimeout(() => {
        this.renderAiAdvisor();
        this.renderOverview();
        this.showToast('Audit complete. Health Score updated!', 'success');
      }, 400);
    },

    // =========================================================================
    // 11. GLOBAL SEARCH & BACKUP TOOLS
    // =========================================================================
    handleGlobalSearch(query) {
      const dropdown = this.el.searchDropdown;
      if (!dropdown) return;

      if (!query || query.length < 2) {
        dropdown.classList.add('hidden');
        return;
      }

      const q = query.toLowerCase();
      const d = appStore.data;

      const matchedCust = d.customers.filter(c => c.name.toLowerCase().includes(q) || c.company.toLowerCase().includes(q)).slice(0, 3);
      const matchedLeads = d.leads.filter(l => l.title.toLowerCase().includes(q) || l.company.toLowerCase().includes(q)).slice(0, 3);
      const matchedAppts = d.appointments.filter(a => a.title.toLowerCase().includes(q) || a.client.toLowerCase().includes(q)).slice(0, 2);
      const matchedTasks = d.tasks.filter(t => t.title.toLowerCase().includes(q)).slice(0, 3);
      const matchedPay = d.payments.filter(p => p.invoiceNum.toLowerCase().includes(q) || p.client.toLowerCase().includes(q)).slice(0, 2);

      const totalMatches = matchedCust.length + matchedLeads.length + matchedAppts.length + matchedTasks.length + matchedPay.length;

      if (totalMatches === 0) {
        dropdown.innerHTML = '<div style="padding: 1rem; color: var(--text-dim); text-align: center; font-size: 0.8rem;">No matches found.</div>';
        dropdown.classList.remove('hidden');
        return;
      }

      let html = '';

      if (matchedCust.length > 0) {
        html += `<div class="search-result-group"><div class="search-result-group-title">Customers</div>`;
        html += matchedCust.map(c => `
          <div class="search-result-item" onclick="AstraApp.switchView('customers'); AstraApp.editCustomer('${c.id}')">
            <span>👤 ${escapeHTML(c.name)} (${escapeHTML(c.company)})</span>
            <span class="badge">$${(c.spend || 0).toLocaleString()}</span>
          </div>
        `).join('');
        html += '</div>';
      }

      if (matchedLeads.length > 0) {
        html += `<div class="search-result-group"><div class="search-result-group-title">Deals & Leads</div>`;
        html += matchedLeads.map(l => `
          <div class="search-result-item" onclick="AstraApp.switchView('leads')">
            <span>🎯 ${escapeHTML(l.title)}</span>
            <span class="text-cyan">$${l.value.toLocaleString()}</span>
          </div>
        `).join('');
        html += '</div>';
      }

      if (matchedTasks.length > 0) {
        html += `<div class="search-result-group"><div class="search-result-group-title">Tasks</div>`;
        html += matchedTasks.map(t => `
          <div class="search-result-item" onclick="AstraApp.switchView('tasks')">
            <span>⚡ ${escapeHTML(t.title)}</span>
            <span class="priority-tag priority-${t.priority}">${t.priority}</span>
          </div>
        `).join('');
        html += '</div>';
      }

      if (matchedPay.length > 0) {
        html += `<div class="search-result-group"><div class="search-result-group-title">Invoices</div>`;
        html += matchedPay.map(p => `
          <div class="search-result-item" onclick="AstraApp.switchView('payments')">
            <span>💳 ${escapeHTML(p.invoiceNum)} — ${escapeHTML(p.client)}</span>
            <span class="status-pill status-${p.status}">$${p.amount.toLocaleString()}</span>
          </div>
        `).join('');
        html += '</div>';
      }

      dropdown.innerHTML = html;
      dropdown.classList.remove('hidden');
    },

    exportData() {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appStore.data, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `astra_business_backup_${getRelativeDate(0)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      this.showToast('Astra data backup exported.', 'success');
    },

    importData(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (parsed && parsed.customers && parsed.leads) {
            appStore.data = parsed;
            appStore.save();
            this.init();
            this.showToast('Backup restored successfully!', 'success');
          } else {
            this.showToast('Invalid backup file format.', 'error');
          }
        } catch (err) {
          this.showToast('Error parsing JSON backup file.', 'error');
        }
      };
      reader.readAsText(file);
      event.target.value = '';
    },

    refreshNotifications() {
      const notifs = appStore.data.notifications || [];
      const listEl = this.el.notifList;
      if (!listEl) return;

      if (notifs.length === 0) {
        listEl.innerHTML = '<div style="padding: 1rem; color: var(--text-dim); text-align: center; font-size: 0.78rem;">No unread alerts.</div>';
        this.el.notifDot?.classList.remove('active');
        return;
      }

      this.el.notifDot?.classList.add('active');
      listEl.innerHTML = notifs.map(n => `
        <div class="notif-item">
          <div>${escapeHTML(n.text)}</div>
          <span class="notif-time">${n.time}</span>
        </div>
      `).join('');
    },

    clearNotifications() {
      appStore.data.notifications = [];
      appStore.save();
      this.refreshNotifications();
      this.showToast('Alerts cleared.', 'info');
    },

    // =========================================================================
    // 12. MODAL & TOAST HELPERS
    // =========================================================================
    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('hidden');
        const firstInput = modal.querySelector('input:not([type="hidden"]), select');
        if (firstInput) setTimeout(() => firstInput.focus(), 50);
      }
    },

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('hidden');
        const form = modal.querySelector('form');
        if (form) form.reset();
        const hiddenId = modal.querySelector('input[type="hidden"]');
        if (hiddenId) hiddenId.value = '';
      }
    },

    showToast(message, type = 'info') {
      const container = this.el.toastContainer;
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;

      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        toast.style.transition = 'all 0.2s ease';
        setTimeout(() => toast.remove(), 200);
      }, 3200);
    }
  };

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Expose global controller
  window.AstraApp = AstraApp;

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AstraApp.init());
  } else {
    AstraApp.init();
  }
})();
