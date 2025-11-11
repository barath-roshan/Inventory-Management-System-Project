// Enhanced data structure with persistence simulation
let applicationData = {
  // Flag to simulate data persistence
  _dataLoaded: false,
  
  // Session management
  currentSession: null,
  sessionTimeout: null,
  users: [
    { id: 1, name: "Store Admin", email: "admin@clothingstore.com", role: "Admin", password: "admin123", active: true, created_date: "2025-10-01", last_login: "2025-10-15 09:00:00" },
    { id: 2, name: "Store Manager", email: "manager@clothingstore.com", role: "Manager", password: "manager123", active: true, created_date: "2025-10-05", last_login: "2025-10-15 08:45:00" },
    { id: 3, name: "Sales Staff", email: "staff@clothingstore.com", role: "Staff", password: "staff123", active: true, created_date: "2025-10-10", last_login: "2025-10-15 08:30:00" }
  ],
  categories: [
    { id: 1, name: "Shirts & Tops", description: "Shirts, blouses, t-shirts, tank tops" },
    { id: 2, name: "Pants & Bottoms", description: "Jeans, trousers, shorts, leggings" },
    { id: 3, name: "Dresses & Skirts", description: "Casual and formal dresses, skirts" },
    { id: 4, name: "Outerwear & Jackets", description: "Coats, jackets, blazers, cardigans" },
    { id: 5, name: "Footwear & Shoes", description: "Sneakers, boots, sandals, heels" },
    { id: 6, name: "Accessories", description: "Belts, scarves, hats, bags" }
  ],
  products: [
    { id: 1, name: "Classic White Button Shirt", sku: "CWS001", category_id: 1, category: "Shirts & Tops", price: 45.99, cost: 22.00, current_stock: 15, min_stock: 10, max_stock: 100, description: "Professional white cotton button-down shirt", size: "M", color: "White", material: "Cotton", brand: "Corporate Essentials", season: "All Season", image_url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150", created_by: "Store Admin", created_date: "2025-10-01" },
    { id: 2, name: "Slim Fit Denim Jeans", sku: "SFJ002", category_id: 2, category: "Pants & Bottoms", price: 79.99, cost: 35.00, current_stock: 8, min_stock: 12, max_stock: 80, description: "Classic blue slim fit denim jeans", size: "32", color: "Blue", material: "Denim", brand: "Urban Style", season: "All Season", image_url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=150", created_by: "Store Manager", created_date: "2025-10-02" },
    { id: 3, name: "Floral Summer Dress", sku: "FSD003", category_id: 3, category: "Dresses & Skirts", price: 89.99, cost: 40.00, current_stock: 25, min_stock: 15, max_stock: 60, description: "Light floral print summer dress", size: "S", color: "Multi-color", material: "Cotton Blend", brand: "Summer Vibes", season: "Summer", image_url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150", created_by: "Sales Staff", created_date: "2025-10-03" },
    { id: 4, name: "Leather Jacket", sku: "LJ004", category_id: 4, category: "Outerwear & Jackets", price: 199.99, cost: 95.00, current_stock: 6, min_stock: 8, max_stock: 30, description: "Genuine leather motorcycle jacket", size: "L", color: "Black", material: "Leather", brand: "Rebel Wear", season: "Fall", image_url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=150", created_by: "Store Admin", created_date: "2025-10-04" },
    { id: 5, name: "Running Sneakers", sku: "RS005", category_id: 5, category: "Footwear & Shoes", price: 129.99, cost: 65.00, current_stock: 22, min_stock: 18, max_stock: 75, description: "Comfortable running sneakers with cushioning", size: "9", color: "Gray", material: "Synthetic", brand: "SportMax", season: "All Season", image_url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150", created_by: "Store Manager", created_date: "2025-10-05" },
    { id: 6, name: "Silk Evening Dress", sku: "SED006", category_id: 3, category: "Dresses & Skirts", price: 249.99, cost: 120.00, current_stock: 4, min_stock: 6, max_stock: 25, description: "Elegant silk evening dress for special occasions", size: "M", color: "Navy Blue", material: "Silk", brand: "Elegance", season: "All Season", image_url: "https://images.unsplash.com/photo-1566479179817-c0ae28eb59fe?w=150", created_by: "Store Admin", created_date: "2025-10-06" },
    { id: 7, name: "Cotton Polo Shirt", sku: "CPS007", category_id: 1, category: "Shirts & Tops", price: 35.99, cost: 18.00, current_stock: 32, min_stock: 20, max_stock: 90, description: "Classic cotton polo shirt with collar", size: "L", color: "Red", material: "Cotton", brand: "Casual Comfort", season: "Spring", image_url: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=150", created_by: "Sales Staff", created_date: "2025-10-07" },
    { id: 8, name: "Wool Winter Coat", sku: "WWC008", category_id: 4, category: "Outerwear & Jackets", price: 179.99, cost: 85.00, current_stock: 12, min_stock: 10, max_stock: 40, description: "Warm wool winter coat with hood", size: "XL", color: "Charcoal", material: "Wool", brand: "Winter Warmth", season: "Winter", image_url: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=150", created_by: "Store Manager", created_date: "2025-10-08" }
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34", "36", "38", "6", "7", "8", "9", "10", "11", "12"],
  colors: ["Black", "White", "Gray", "Charcoal", "Navy Blue", "Blue", "Red", "Green", "Yellow", "Pink", "Purple", "Brown", "Beige", "Multi-color"],
  materials: ["Cotton", "Cotton Blend", "Polyester", "Denim", "Silk", "Wool", "Leather", "Synthetic", "Linen", "Cashmere", "Nylon", "Spandex"],
  brands: ["Corporate Essentials", "Urban Style", "Summer Vibes", "Rebel Wear", "SportMax", "Elegance", "Casual Comfort", "Winter Warmth", "Street Fashion", "Professional Line"],
  seasons: ["Spring", "Summer", "Fall", "Winter", "All Season"],
  activities: [
    { id: 1, user: "Sales Staff", action: "Stock sold", details: "Slim Fit Denim Jeans: -3 units", timestamp: "2025-10-15 09:15:00", type: "stock_decrease" },
    { id: 2, user: "Store Manager", action: "Stock sold", details: "Leather Jacket: -2 units", timestamp: "2025-10-15 08:45:00", type: "stock_decrease" },
    { id: 3, user: "Store Admin", action: "Stock received", details: "Silk Evening Dress: +2 units", timestamp: "2025-10-14 14:30:00", type: "stock_increase" }
  ],
  kpis: {
    total_products: 8,
    low_stock_items: 3,
    out_of_stock: 0,
    total_inventory_value: 12847.35,
    monthly_sales: 18750.00,
    active_users: 3
  },
  sales_data: [
    { month: "Apr", sales: 15200 },
    { month: "May", sales: 16800 },
    { month: "Jun", sales: 14500 },
    { month: "Jul", sales: 19200 },
    { month: "Aug", sales: 17600 },
    { month: "Sep", sales: 20100 },
    { month: "Oct", sales: 18750 }
  ],
  stock_by_category: [
    { category: "Shirts & Tops", stock: 47 },
    { category: "Pants & Bottoms", stock: 8 },
    { category: "Dresses & Skirts", stock: 29 },
    { category: "Outerwear & Jackets", stock: 18 },
    { category: "Footwear & Shoes", stock: 22 }
  ],
  stock_movements: [
    { id: 1, product_id: 2, product_name: "Slim Fit Denim Jeans", movement_type: "decrease", quantity: 3, reason: "sold", user: "Sales Staff", timestamp: "2025-10-15 09:15:00", notes: "Customer bought 3 pairs in different sizes" },
    { id: 2, product_id: 4, product_name: "Leather Jacket", movement_type: "decrease", quantity: 2, reason: "sold", user: "Store Manager", timestamp: "2025-10-15 08:45:00", notes: "Premium customer purchase" },
    { id: 3, product_id: 6, product_name: "Silk Evening Dress", movement_type: "increase", quantity: 2, reason: "received", user: "Store Admin", timestamp: "2025-10-14 14:30:00", notes: "New shipment arrival" }
  ]
};

// Application state
let currentUser = null;
let currentSection = 'dashboard';
let editingProduct = null;
let isLoading = false;

// Session management
function initializeSession() {
  // Always start with login page for security
  showLoginPage();
}

// Data persistence simulation (using variables instead of localStorage due to sandbox)
const dataStore = {
  users: [],
  products: [],
  categories: [],
  activities: [],
  currentSession: null
};

function getStoredData(key) {
  return dataStore[key] || null;
}

function setStoredData(key, value) {
  dataStore[key] = value;
}

function clearStoredData(key) {
  if (dataStore[key]) {
    delete dataStore[key];
  }
}

function saveSession(user) {
  const session = {
    userId: user.id,
    loginTime: Date.now(),
    expiresAt: Date.now() + (8 * 60 * 60 * 1000) // 8 hours
  };
  setStoredData('currentSession', session);
  
  // Update user's last login
  user.last_login = new Date().toISOString().replace('T', ' ').substring(0, 19);
  
  // Set session timeout warning
  clearTimeout(applicationData.sessionTimeout);
  applicationData.sessionTimeout = setTimeout(() => {
    showToast('Session will expire in 5 minutes. Please save your work.', 'warning');
  }, 7.5 * 60 * 60 * 1000); // 7.5 hours
}

function clearSession() {
  clearStoredData('currentSession');
  clearTimeout(applicationData.sessionTimeout);
  currentUser = null;
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing Multi-Page Clothing Inventory System');
  console.log('📊 Dashboard: Analytics & KPIs (Separate Page)');
  console.log('📦 Products: Inventory Management (Separate Page)'); 
  console.log('🔐 Authentication: Login Gate Active');
  
  initializeApplication();
  
  // Add development indicators
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    addDevelopmentIndicators();
  }
});

function addDevelopmentIndicators() {
  const devIndicator = document.createElement('div');
  devIndicator.style.cssText = `
    position: fixed;
    bottom: var(--space-8);
    left: var(--space-8);
    background: var(--color-info);
    color: var(--color-white);
    padding: var(--space-4) var(--space-8);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    z-index: 1000;
    opacity: 0.7;
  `;
  devIndicator.textContent = 'Multi-Page System Active';
  document.body.appendChild(devIndicator);
}

function initializeApplication() {
  // Initialize data stores with application data
  if (!applicationData._dataLoaded) {
    dataStore.users = [...applicationData.users];
    dataStore.products = [...applicationData.products];
    dataStore.categories = [...applicationData.categories];
    dataStore.activities = [...applicationData.activities];
    applicationData._dataLoaded = true;
  }
  
  initializeEventListeners();
  populateFormOptions();
  initializeSession();
  
  // Set default form values
  setTimeout(() => {
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    
    // Pre-fill demo credentials for easy testing
    if (loginEmail && loginPassword) {
      loginEmail.placeholder = 'Try: admin@clothingstore.com';
      loginPassword.placeholder = 'Try: admin123';
    }
  }, 100);
}

// Event listeners
function initializeEventListeners() {
  // Authentication
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('registerForm').addEventListener('submit', handleRegister);
  document.getElementById('showRegister').addEventListener('click', (e) => {
    e.preventDefault();
    showRegisterPage();
  });
  document.getElementById('showLogin').addEventListener('click', (e) => {
    e.preventDefault();
    showLoginPage();
  });
  document.getElementById('logoutBtn').addEventListener('click', handleLogout);

  // Navigation
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const section = e.currentTarget.getAttribute('data-section');
      navigateToSection(section);
    });
  });

  // Mobile menu
  document.getElementById('mobileMenuToggle').addEventListener('click', toggleMobileMenu);
  document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);

  // User dropdown
  document.getElementById('userDropdown').addEventListener('click', toggleUserDropdown);

  // Product management
  document.getElementById('addProductBtn').addEventListener('click', showAddProductModal);
  document.getElementById('closeProductModal').addEventListener('click', hideProductModal);
  document.getElementById('cancelProductModal').addEventListener('click', hideProductModal);
  document.getElementById('productForm').addEventListener('submit', handleProductSubmit);

  // Search and filters
  document.getElementById('productSearch').addEventListener('input', filterProducts);
  document.getElementById('categoryFilter').addEventListener('change', filterProducts);

  // Category management
  document.getElementById('addCategoryBtn').addEventListener('click', showAddCategoryModal);

  // Profile form
  document.getElementById('profileForm').addEventListener('submit', handleProfileUpdate);

  // User management
  document.getElementById('addUserBtn').addEventListener('click', showAddUserModal);

  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      hideProductModal();
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-dropdown')) {
      document.getElementById('userDropdownMenu').classList.remove('show');
    }
  });
}

// Authentication functions
function handleLogin(e) {
  e.preventDefault();
  
  if (isLoading) return;
  isLoading = true;
  
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const rememberMe = document.getElementById('rememberMe').checked;
  
  // Clear any existing error messages
  const existingError = document.querySelector('.auth-error');
  if (existingError) {
    existingError.remove();
  }
  
  // Validation
  if (!email || !password) {
    showAuthError('Please enter both email and password');
    isLoading = false;
    return;
  }
  
  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Signing In...';
  submitBtn.disabled = true;
  
  // Find user in application data (real authentication check)
  setTimeout(() => {
    const users = applicationData.users; // Use application data directly for authentication
    const user = users.find(u => u.email.toLowerCase() === email && u.password === password);
    
    if (user && user.active) {
      // Create current user session
      currentUser = { ...user };
      
      // Update last login
      user.last_login = new Date().toISOString().replace('T', ' ').substring(0, 19);
      
      // Save session
      saveSession(user);
      
      // Show main application
      showMainApp();
      showToast(`Welcome back, ${user.name}!`, 'success');
      addActivity(user.name, 'Logged in', 'User authentication successful');
      
      // Reset form
      document.getElementById('loginForm').reset();
    } else if (user && !user.active) {
      showAuthError('Your account has been deactivated. Please contact administrator.');
    } else {
      showAuthError('Invalid email or password. Please check your credentials and try again.');
    }
    
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    isLoading = false;
  }, 800);
}

function showAuthError(message) {
  // Remove existing error
  const existingError = document.querySelector('.auth-error');
  if (existingError) {
    existingError.remove();
  }
  
  // Create error element
  const errorDiv = document.createElement('div');
  errorDiv.className = 'auth-error';
  errorDiv.style.cssText = `
    background-color: rgba(var(--color-error-rgb), 0.1);
    color: var(--color-error);
    padding: var(--space-12);
    border-radius: var(--radius-base);
    border: 1px solid rgba(var(--color-error-rgb), 0.3);
    margin-bottom: var(--space-16);
    font-size: var(--font-size-sm);
    text-align: center;
  `;
  errorDiv.textContent = message;
  
  // Insert before form
  const form = document.querySelector('#loginPage .auth-form') || document.querySelector('#registerPage .auth-form');
  if (form) {
    form.insertBefore(errorDiv, form.firstChild);
  }
}

function handleRegister(e) {
  e.preventDefault();
  
  if (isLoading) return;
  isLoading = true;
  
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim().toLowerCase();
  const role = document.getElementById('registerRole').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  // Clear any existing error messages
  const existingError = document.querySelector('.auth-error');
  if (existingError) {
    existingError.remove();
  }
  
  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Creating Account...';
  submitBtn.disabled = true;
  
  function resetSubmitButton() {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    isLoading = false;
  }
  
  // Validation
  if (!name || name.length < 2) {
    showAuthError('Name must be at least 2 characters long');
    resetSubmitButton();
    return;
  }
  
  if (!email || !isValidEmail(email)) {
    showAuthError('Please enter a valid email address');
    resetSubmitButton();
    return;
  }
  
  if (!role) {
    showAuthError('Please select a role');
    resetSubmitButton();
    return;
  }
  
  if (!password || password.length < 6) {
    showAuthError('Password must be at least 6 characters long');
    resetSubmitButton();
    return;
  }
  
  if (password !== confirmPassword) {
    showAuthError('Passwords do not match');
    resetSubmitButton();
    return;
  }
  
  // Check if email already exists
  if (applicationData.users.some(u => u.email.toLowerCase() === email)) {
    showAuthError('Email address is already registered');
    resetSubmitButton();
    return;
  }
  
  // Simulate API call delay
  setTimeout(() => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      role,
      password,
      active: true,
      created_date: new Date().toISOString().substring(0, 10),
      last_login: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };
    
    // Add to both application data and data store
    applicationData.users.push(newUser);
    if (!dataStore.users) dataStore.users = [];
    dataStore.users.push({ ...newUser });
    
    // Auto-login after successful registration
    currentUser = { ...newUser };
    saveSession(newUser);
    
    // Show success and redirect to main app
    showToast('Account created successfully! Welcome aboard!', 'success');
    addActivity('System', 'New user registered', `${name} (${email}) - Role: ${role}`);
    
    // Reset form and show main app
    document.getElementById('registerForm').reset();
    showMainApp();
    
    resetSubmitButton();
  }, 1000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleLogout() {
  if (currentUser) {
    addActivity(currentUser.name, 'Logged out', 'User session ended');
  }
  
  // Clear session and user data
  clearSession();
  
  // Remove authentication indicators
  document.body.classList.remove('authenticated');
  clearPageIndicators();
  clearAuthenticationIndicator();
  
  // Reset application state
  editingProduct = null;
  currentSection = 'dashboard';
  
  // Show login page
  showLoginPage();
  
  // Clear any modals or dropdowns
  hideProductModal();
  hideCustomModal();
  
  showToast('You have been logged out successfully', 'success');
}

// Navigation functions
function showLoginPage() {
  document.getElementById('loginPage').classList.remove('hidden');
  document.getElementById('registerPage').classList.add('hidden');
  document.getElementById('mainApp').classList.add('hidden');
  
  // Remove authenticated state
  document.body.classList.remove('authenticated');
  
  // Clear any page indicators
  clearPageIndicators();
  clearAuthenticationIndicator();
}

function showRegisterPage() {
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('registerPage').classList.remove('hidden');
  document.getElementById('mainApp').classList.add('hidden');
}

function showMainApp() {
  if (!currentUser) {
    showLoginPage();
    return;
  }
  
  // Hide authentication pages
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('registerPage').classList.add('hidden');
  
  // Show main application with authentication indicator
  document.getElementById('mainApp').classList.remove('hidden');
  document.body.classList.add('authenticated');
  
  // Add security indicator
  addAuthenticationIndicator();
  
  // Update user info in header
  const userNameEl = document.querySelector('.user-name');
  const userRoleEl = document.querySelector('.user-role');
  if (userNameEl) userNameEl.textContent = currentUser.name;
  if (userRoleEl) userRoleEl.textContent = currentUser.role;
  
  // Show/hide admin-only elements
  if (currentUser.role === 'Admin') {
    document.body.classList.add('role-admin');
  } else {
    document.body.classList.remove('role-admin');
  }
  
  // Load default section
  navigateToSection('dashboard');
}

function navigateToSection(sectionName) {
  // Clear previous page indicators
  clearPageIndicators();
  
  // Update active menu item
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
  
  // Update page title
  const titles = {
    dashboard: 'Analytics Dashboard',
    products: 'Inventory Management',
    categories: 'Category Management',
    reports: 'Detailed Reports',
    users: 'User Management',
    settings: 'System Settings'
  };
  document.getElementById('pageTitle').textContent = titles[sectionName] || sectionName;
  
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show selected section
  document.getElementById(`${sectionName}Section`).classList.add('active');
  
  currentSection = sectionName;
  
  // Load section-specific content
  switch(sectionName) {
    case 'dashboard':
      loadDashboard();
      break;
    case 'products':
      loadProducts();
      // Add bulk operations button if user has permission
      setTimeout(addBulkOperationsButton, 100);
      break;
    case 'categories':
      loadCategories();
      break;
    case 'reports':
      loadReports();
      break;
    case 'users':
      if (currentUser.role === 'Admin') {
        loadUsers();
      }
      break;
    case 'settings':
      loadSettings();
      break;
  }
  
  // Close mobile menu if open
  document.getElementById('sidebar').classList.remove('show');
  
  // Add page-specific indicators
  addPageIndicator(sectionName);
  
  // Update page-specific content
  if (sectionName === 'products') {
    updateProductStats();
  }
}

// Dashboard functions
function loadDashboard() {
  // Analytics Dashboard - completely separate from inventory management
  console.log('📊 Loading Analytics Dashboard - SEPARATE from inventory management');
  console.log('🎯 This page shows: KPIs, Charts, Activities, Analytics Overview');
  
  updateKPIs();
  loadCharts();
  loadActivities();
  
  // Ensure dashboard is visually distinct from products page
  addDashboardIdentifiers();
  
  // Clear any product-specific data that might have been loaded
  const productStatsContainer = document.getElementById('productStatsContainer');
  if (productStatsContainer) {
    productStatsContainer.style.display = 'none';
  }
}

function addDashboardIdentifiers() {
  const dashboardSection = document.getElementById('dashboardSection');
  if (dashboardSection && !dashboardSection.querySelector('.dashboard-identifier')) {
    const identifier = document.createElement('div');
    identifier.className = 'dashboard-identifier page-indicator';
    identifier.innerHTML = '<i class="fas fa-chart-line"></i> Analytics Dashboard';
    identifier.style.cssText = 'margin-bottom: var(--space-16);';
    dashboardSection.insertBefore(identifier, dashboardSection.firstChild);
  }
}

function updateKPIs() {
  // Calculate real-time KPIs from current data
  const products = dataStore.products || applicationData.products;
  const users = dataStore.users || applicationData.users;
  
  const totalProducts = products.length;
  const lowStockItems = products.filter(p => p.current_stock < p.min_stock).length;
  const outOfStock = products.filter(p => p.current_stock === 0).length;
  const totalValue = products.reduce((sum, p) => sum + (p.current_stock * p.price), 0);
  const activeUsers = users.filter(u => u.active).length;
  
  // Calculate additional metrics
  const overStockItems = products.filter(p => p.current_stock > p.max_stock).length;
  const profitMargin = products.reduce((sum, p) => {
    const profit = (p.price - p.cost) * p.current_stock;
    return sum + profit;
  }, 0);
  
  // Update KPI displays
  document.getElementById('totalProducts').textContent = totalProducts.toLocaleString();
  document.getElementById('lowStockItems').textContent = lowStockItems.toLocaleString();
  document.getElementById('outOfStock').textContent = outOfStock.toLocaleString();
  document.getElementById('totalValue').textContent = `$${totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  document.getElementById('monthlySales').textContent = `$${applicationData.kpis.monthly_sales.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  document.getElementById('activeUsers').textContent = activeUsers.toLocaleString();
  
  // Update notification badge
  const criticalAlerts = outOfStock;
  const warningAlerts = lowStockItems + overStockItems;
  const totalNotifications = criticalAlerts + warningAlerts;
  
  const badge = document.getElementById('notificationBadge');
  badge.textContent = totalNotifications;
  badge.style.display = totalNotifications > 0 ? 'block' : 'none';
  
  // Update badge color based on severity
  badge.className = 'notification-badge';
  if (criticalAlerts > 0) {
    badge.classList.add('critical');
  } else if (warningAlerts > 0) {
    badge.classList.add('warning');
  }
  
  // Store updated KPIs for reference
  applicationData.kpis = {
    ...applicationData.kpis,
    total_products: totalProducts,
    low_stock_items: lowStockItems,
    out_of_stock: outOfStock,
    over_stock_items: overStockItems,
    total_inventory_value: totalValue,
    profit_margin: profitMargin,
    active_users: activeUsers
  };
}

function loadCharts() {
  // Sales trend chart
  const salesCtx = document.getElementById('salesChart');
  if (!salesCtx) return;
  
  const salesChart2D = salesCtx.getContext('2d');
  if (window.salesChart) {
    window.salesChart.destroy();
  }
  
  window.salesChart = new Chart(salesChart2D, {
    type: 'line',
    data: {
      labels: applicationData.sales_data.map(d => d.month),
      datasets: [{
        label: 'Sales ($)',
        data: applicationData.sales_data.map(d => d.sales),
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '$' + value.toLocaleString();
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return 'Sales: $' + context.parsed.y.toLocaleString();
            }
          }
        }
      }
    }
  });
  
  // Stock by category chart
  const stockCtx = document.getElementById('stockChart');
  if (!stockCtx) return;
  
  const stockChart2D = stockCtx.getContext('2d');
  if (window.stockChart) {
    window.stockChart.destroy();
  }
  
  // Calculate current stock by category from products
  const products = dataStore.products || applicationData.products;
  const categories = dataStore.categories || applicationData.categories;
  
  const stockByCategory = categories.map(category => {
    const categoryProducts = products.filter(p => p.category_id === category.id);
    const totalStock = categoryProducts.reduce((sum, p) => sum + p.current_stock, 0);
    return {
      category: category.name,
      stock: totalStock
    };
  }).filter(item => item.stock > 0); // Only show categories with stock
  
  if (stockByCategory.length === 0) {
    // Show empty state
    stockCtx.parentElement.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 40px;">No stock data available</p>';
    return;
  }
  
  window.stockChart = new Chart(stockChart2D, {
    type: 'doughnut',
    data: {
      labels: stockByCategory.map(d => d.category),
      datasets: [{
        label: 'Stock Level',
        data: stockByCategory.map(d => d.stock),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'].slice(0, stockByCategory.length),
        borderWidth: 2,
        borderColor: 'var(--color-surface)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed / total) * 100).toFixed(1);
              return `${context.label}: ${context.parsed.toLocaleString()} items (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

function loadActivities() {
  const container = document.getElementById('activitiesList');
  const activities = dataStore.activities || applicationData.activities;
  
  if (activities.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-clock" style="font-size: 2em; color: var(--color-text-secondary); margin-bottom: 10px;"></i>
        <p style="color: var(--color-text-secondary);">No recent activities to display</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = activities.slice(0, 10).map(activity => `
    <div class="activity-item" data-activity-type="${activity.type || 'general'}">
      <div class="activity-icon ${getActivityIconClass(activity.action)}">
        <i class="fas fa-${getActivityIcon(activity.action)}"></i>
      </div>
      <div class="activity-content">
        <div class="activity-action">
          <strong>${activity.user}</strong> ${activity.action.toLowerCase()}
        </div>
        <div class="activity-details">${activity.details}</div>
      </div>
      <div class="activity-time" title="${formatDateTime(activity.timestamp)}">
        ${formatTimeAgo(activity.timestamp)}
      </div>
    </div>
  `).join('');
}

function getActivityIconClass(action) {
  const iconClasses = {
    'Added new product': 'success',
    'Updated product': 'info', 
    'Updated stock': 'warning',
    'Deleted product': 'danger',
    'Stock adjustment': 'warning',
    'Added new category': 'success',
    'Updated category': 'info',
    'Deleted category': 'danger',
    'Logged in': 'success',
    'Logged out': 'info',
    'New user registered': 'success',
    'Updated profile': 'info'
  };
  return iconClasses[action] || 'info';
}

function formatDateTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatTimeAgo(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);
  const diffInMinutes = Math.floor((now - date) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  
  return formatDateTime(timestamp);
}

function getActivityIcon(action) {
  const icons = {
    'Added new product': 'plus-circle',
    'Updated product': 'edit',
    'Updated stock': 'warehouse', 
    'Stock adjustment': 'exchange-alt',
    'Deleted product': 'trash-alt',
    'Added new category': 'tags',
    'Updated category': 'tag',
    'Deleted category': 'times-circle',
    'Stock alert triggered': 'exclamation-triangle',
    'Logged in': 'sign-in-alt',
    'Logged out': 'sign-out-alt', 
    'New user registered': 'user-plus',
    'Updated profile': 'user-edit',
    'Added new user': 'user-plus',
    'Updated user': 'user-edit',
    'Activated user': 'user-check',
    'Deactivated user': 'user-times'
  };
  return icons[action] || 'info-circle';
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// Products functions
function loadProducts() {
  // Inventory Management Page - completely separate from dashboard
  console.log('📦 Loading Inventory Management - SEPARATE from analytics dashboard');
  console.log('🎯 This page shows: Product CRUD, Stock Management, Inventory Operations');
  
  populateCategoryFilter();
  renderProductsTable();
  updateProductStats();
  
  // Ensure products page is visually distinct from dashboard
  addProductsIdentifiers();
  
  // Show product-specific statistics
  const productStatsContainer = document.getElementById('productStatsContainer');
  if (productStatsContainer) {
    productStatsContainer.style.display = 'block';
  }
}

function addProductsIdentifiers() {
  const productsSection = document.getElementById('productsSection');
  if (productsSection && !productsSection.querySelector('.products-identifier')) {
    const identifier = document.createElement('div');
    identifier.className = 'products-identifier page-indicator';
    identifier.innerHTML = '<i class="fas fa-boxes"></i> Inventory Management';
    identifier.style.cssText = 'margin-bottom: var(--space-16);';
    
    // Insert after section header
    const sectionHeader = productsSection.querySelector('.section-header');
    if (sectionHeader) {
      sectionHeader.insertAdjacentElement('afterend', identifier);
    } else {
      productsSection.insertBefore(identifier, productsSection.firstChild);
    }
  }
}

function updateProductStats() {
  const products = dataStore.products || applicationData.products;
  const lowStockCount = products.filter(p => p.current_stock < p.min_stock).length;
  const outOfStockCount = products.filter(p => p.current_stock === 0).length;
  const totalValue = products.reduce((sum, p) => sum + (p.current_stock * p.price), 0);
  
  // Update any product-related stats in the UI
  const container = document.getElementById('productStatsContainer');
  if (container && products.length > 0) {
    container.style.display = 'block';
    container.innerHTML = `
      <div style="display: flex; justify-content: space-around; align-items: center; text-align: center;">
        <div class="stats-item">
          <div class="stats-value">${products.length}</div>
          <div class="stats-label">Total Items</div>
        </div>
        <div class="stats-item">
          <div class="stats-value text-warning">${lowStockCount}</div>
          <div class="stats-label">Low Stock</div>
        </div>
        <div class="stats-item">
          <div class="stats-value text-error">${outOfStockCount}</div>
          <div class="stats-label">Out of Stock</div>
        </div>
        <div class="stats-item">
          <div class="stats-value">$${totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
          <div class="stats-label">Total Value</div>
        </div>
      </div>
    `;
  } else if (container) {
    container.style.display = 'none';
  }
}

function populateCategoryFilter() {
  const filter = document.getElementById('categoryFilter');
  filter.innerHTML = '<option value="">All Categories</option>';
  const categories = dataStore.categories || applicationData.categories;
  categories.forEach(cat => {
    filter.innerHTML += `<option value="${cat.name}">${cat.name}</option>`;
  });
}

function renderProductsTable() {
  const tbody = document.getElementById('productsTableBody');
  const searchTerm = document.getElementById('productSearch').value.toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter').value;
  
  const products = dataStore.products || applicationData.products;
  let filteredProducts = products.filter(product => {
    const matchesSearch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm) ||
      product.sku.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      (product.brand && product.brand.toLowerCase().includes(searchTerm)) ||
      (product.material && product.material.toLowerCase().includes(searchTerm));
    const matchesCategory = !categoryFilter || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });
  
  if (filteredProducts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
          <i class="fas fa-search" style="font-size: 2em; margin-bottom: 10px; display: block;"></i>
          ${searchTerm || categoryFilter ? 'No clothing items found matching your criteria' : 'No clothing items available'}
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = filteredProducts.map(product => {
    const stockStatus = getStockStatus(product);
    const canDelete = hasPermission('delete_products');
    const canEdit = hasPermission('manage_products');
    const canAdjustStock = hasPermission('update_stock') || hasPermission('manage_products');
    
    return `
      <tr data-product-id="${product.id}">
        <td>
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${product.image_url}" alt="${product.name}" 
                 style="width: 40px; height: 40px; border-radius: 6px; object-fit: cover;"
                 onerror="this.src='https://via.placeholder.com/40x40/cccccc/666666?text=IMG'">
            <div>
              <strong>${product.name}</strong><br>
              <small style="color: var(--color-text-secondary);">${product.brand || 'No Brand'} - ${product.material || 'Unknown'}</small>
            </div>
          </div>
        </td>
        <td><code>${product.sku}</code></td>
        <td><span class="status status--info">${product.category}</span></td>
        <td>
          <div style="text-align: center;">
            <strong>${product.size || 'N/A'}</strong><br>
            <small style="color: var(--color-text-secondary);">${product.color || 'N/A'}</small>
          </div>
        </td>
        <td>
          <div class="stock-controls">
            <div class="stock-display">
              <span class="stock-badge ${stockStatus.class}">${product.current_stock}</span>
              ${canAdjustStock ? `
                <div class="stock-buttons">
                  <button class="btn-stock btn-stock-minus" onclick="adjustStock(${product.id}, -1)" title="Decrease Stock">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button class="btn-stock btn-stock-plus" onclick="adjustStock(${product.id}, 1)" title="Increase Stock">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              ` : ''}
            </div>
            <div class="stock-info">
              <small style="color: var(--color-text-secondary);">Min: ${product.min_stock} | Max: ${product.max_stock}</small>
            </div>
          </div>
        </td>
        <td>
          <div class="price-info">
            <strong>$${product.price.toFixed(2)}</strong><br>
            <small style="color: var(--color-text-secondary);">Cost: $${product.cost.toFixed(2)}</small>
          </div>
        </td>
        <td><span class="status status--${stockStatus.class === 'low' ? 'error' : stockStatus.class === 'overstock' ? 'warning' : 'success'}">${stockStatus.text}</span></td>
        <td>
          <div class="action-buttons">
            ${canEdit ? `
              <button class="btn btn--sm btn--outline btn-icon" onclick="editProduct(${product.id})" title="Edit Item">
                <i class="fas fa-edit"></i>
              </button>
            ` : ''}
            ${canAdjustStock ? `
              <button class="btn btn--sm btn--outline btn-icon" onclick="showStockAdjustment(${product.id})" title="Bulk Stock Adjustment">
                <i class="fas fa-warehouse"></i>
              </button>
            ` : ''}
            <button class="btn btn--sm btn--outline btn-icon" onclick="viewProduct(${product.id})" title="View Details">
              <i class="fas fa-eye"></i>
            </button>
            ${canDelete ? `
              <button class="btn btn--sm btn--outline btn-icon" onclick="deleteProduct(${product.id})" title="Delete Item" style="color: var(--color-error);">
                <i class="fas fa-trash"></i>
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Permission checking function
function hasPermission(permission) {
  if (!currentUser) return false;
  
  const rolePermissions = {
    'Admin': ['view_dashboard', 'manage_products', 'manage_categories', 'manage_users', 'view_reports', 'system_settings', 'bulk_operations', 'delete_products', 'export_data', 'update_stock'],
    'Manager': ['view_dashboard', 'manage_products', 'manage_categories', 'view_reports', 'bulk_operations', 'delete_products', 'export_data', 'update_stock'],
    'Staff': ['view_dashboard', 'manage_products', 'manage_categories', 'view_basic_reports', 'update_stock']
  };
  
  return rolePermissions[currentUser.role]?.includes(permission) || false;
}

// Enhanced stock adjustment function
function showStockAdjustment(productId) {
  const product = (dataStore.products || applicationData.products).find(p => p.id === productId);
  if (!product) return;
  
  const adjustment = prompt(`Current stock: ${product.current_stock}\nEnter stock adjustment (+ to add, - to subtract):`);
  if (adjustment === null) return;
  
  const change = parseInt(adjustment);
  if (isNaN(change)) {
    showToast('Please enter a valid number', 'error');
    return;
  }
  
  const reason = prompt('Reason for adjustment:', 'Stock correction');
  if (reason === null) return;
  
  adjustStockWithReason(productId, change, reason || 'Manual adjustment');
}

function adjustStockWithReason(productId, change, reason) {
  const products = dataStore.products || applicationData.products;
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const oldStock = product.current_stock;
  const newStock = Math.max(0, oldStock + change);
  
  // Update in all relevant places
  product.current_stock = newStock;
  
  // Update in applicationData
  const appDataProduct = applicationData.products.find(p => p.id === productId);
  if (appDataProduct) {
    appDataProduct.current_stock = newStock;
  }
  
  // Update in dataStore
  if (dataStore.products) {
    const dataStoreProduct = dataStore.products.find(p => p.id === productId);
    if (dataStoreProduct) {
      dataStoreProduct.current_stock = newStock;
    }
  }
  
  const action = change > 0 ? 'increased' : 'decreased';
  const changeText = change > 0 ? `+${change}` : change.toString();
  
  showToast(`Stock ${action} for ${product.name} (${changeText} units)`, 'success');
  addActivity(currentUser.name, 'Stock adjustment', `${product.name}: ${oldStock} → ${newStock} units (${reason})`);
  
  // Add to stock movements tracking
  addStockMovement(product, change, reason, oldStock, newStock);
  
  renderProductsTable();
  updateKPIs();
  updateProductStats();
}

function addStockMovement(product, change, reason, oldStock, newStock) {
  const movement = {
    id: Date.now(),
    product_id: product.id,
    product_name: product.name,
    movement_type: change > 0 ? 'increase' : 'decrease',
    quantity: Math.abs(change),
    reason: reason,
    user: currentUser.name,
    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
    old_stock: oldStock,
    new_stock: newStock
  };
  
  if (!applicationData.stock_movements) applicationData.stock_movements = [];
  applicationData.stock_movements.unshift(movement);
  
  // Keep only last 100 movements
  if (applicationData.stock_movements.length > 100) {
    applicationData.stock_movements = applicationData.stock_movements.slice(0, 100);
  }
}

function getStockStatus(product) {
  if (product.current_stock === 0) {
    return { class: 'low', text: 'Out of Stock' };
  } else if (product.current_stock < product.min_stock) {
    return { class: 'low', text: 'Low Stock' };
  } else if (product.current_stock > product.max_stock) {
    return { class: 'overstock', text: 'Overstock' };
  } else {
    return { class: 'normal', text: 'Normal' };
  }
}

function filterProducts() {
  renderProductsTable();
}

// Product modal functions
function showAddProductModal() {
  editingProduct = null;
  document.getElementById('productModalTitle').textContent = 'Add Clothing Item';
  document.getElementById('productForm').reset();
  populateProductFormSelects();
  document.getElementById('productModal').classList.add('show');
}

function editProduct(productId) {
  const products = dataStore.products || applicationData.products;
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  editingProduct = product;
  document.getElementById('productModalTitle').textContent = 'Edit Clothing Item';
  populateProductFormSelects();
  
  // Fill form with product data
  document.getElementById('productName').value = product.name;
  document.getElementById('productSku').value = product.sku;
  document.getElementById('productCategory').value = product.category_id;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productCost').value = product.cost;
  document.getElementById('productStock').value = product.current_stock;
  document.getElementById('productMinStock').value = product.min_stock;
  document.getElementById('productMaxStock').value = product.max_stock;
  document.getElementById('productSize').value = product.size || '';
  document.getElementById('productColor').value = product.color || '';
  document.getElementById('productDescription').value = product.description || '';
  document.getElementById('productImage').value = product.image_url || '';
  
  // Fill clothing-specific fields
  if (document.getElementById('productMaterial')) {
    document.getElementById('productMaterial').value = product.material || '';
  }
  if (document.getElementById('productBrand')) {
    document.getElementById('productBrand').value = product.brand || '';
  }
  if (document.getElementById('productSeason')) {
    document.getElementById('productSeason').value = product.season || '';
  }
  
  document.getElementById('productModal').classList.add('show');
}

function hideProductModal() {
  document.getElementById('productModal').classList.remove('show');
  editingProduct = null;
}

function populateProductFormSelects() {
  // Categories
  const categorySelect = document.getElementById('productCategory');
  if (categorySelect) {
    const categories = dataStore.categories || applicationData.categories;
    categorySelect.innerHTML = '<option value="">Select Category</option>';
    categories.forEach(cat => {
      categorySelect.innerHTML += `<option value="${cat.id}">${cat.name}</option>`;
    });
  }
  
  // Sizes
  const sizeSelect = document.getElementById('productSize');
  if (sizeSelect) {
    sizeSelect.innerHTML = '<option value="">Select Size</option>';
    applicationData.sizes.forEach(size => {
      sizeSelect.innerHTML += `<option value="${size}">${size}</option>`;
    });
  }
  
  // Colors
  const colorSelect = document.getElementById('productColor');
  if (colorSelect) {
    colorSelect.innerHTML = '<option value="">Select Color</option>';
    applicationData.colors.forEach(color => {
      colorSelect.innerHTML += `<option value="${color}">${color}</option>`;
    });
  }
  
  // Materials (for clothing)
  const materialSelect = document.getElementById('productMaterial');
  if (materialSelect) {
    materialSelect.innerHTML = '<option value="">Select Material</option>';
    applicationData.materials.forEach(material => {
      materialSelect.innerHTML += `<option value="${material}">${material}</option>`;
    });
  }
  
  // Brands
  const brandSelect = document.getElementById('productBrand');
  if (brandSelect) {
    brandSelect.innerHTML = '<option value="">Select Brand</option>';
    applicationData.brands.forEach(brand => {
      brandSelect.innerHTML += `<option value="${brand}">${brand}</option>`;
    });
  }
  
  // Seasons
  const seasonSelect = document.getElementById('productSeason');
  if (seasonSelect) {
    seasonSelect.innerHTML = '<option value="">Select Season</option>';
    applicationData.seasons.forEach(season => {
      seasonSelect.innerHTML += `<option value="${season}">${season}</option>`;
    });
  }
}

function handleProductSubmit(e) {
  e.preventDefault();
  
  if (!hasPermission('manage_products')) {
    showToast('You do not have permission to manage products', 'error');
    return;
  }
  
  // Validate form data
  const name = document.getElementById('productName').value.trim();
  const sku = document.getElementById('productSku').value.trim().toUpperCase();
  const categoryId = parseInt(document.getElementById('productCategory').value);
  const price = parseFloat(document.getElementById('productPrice').value);
  const cost = parseFloat(document.getElementById('productCost').value);
  const currentStock = parseInt(document.getElementById('productStock').value);
  const minStock = parseInt(document.getElementById('productMinStock').value);
  const maxStock = parseInt(document.getElementById('productMaxStock').value);
  
  // Validation
  if (!name || name.length < 2) {
    showToast('Item name must be at least 2 characters', 'error');
    return;
  }
  
  if (!sku || sku.length < 2) {
    showToast('SKU must be at least 2 characters', 'error');
    return;
  }
  
  // Check for duplicate SKU
  const products = dataStore.products || applicationData.products;
  const existingSku = products.find(p => p.sku === sku && (!editingProduct || p.id !== editingProduct.id));
  if (existingSku) {
    showToast('SKU already exists. Please use a unique SKU.', 'error');
    return;
  }
  
  if (!categoryId) {
    showToast('Please select a clothing category', 'error');
    return;
  }
  
  if (isNaN(price) || price <= 0) {
    showToast('Please enter a valid price greater than 0', 'error');
    return;
  }
  
  if (isNaN(cost) || cost < 0) {
    showToast('Please enter a valid cost (0 or greater)', 'error');
    return;
  }
  
  if (cost >= price) {
    if (!confirm('Cost is equal to or higher than price. This will result in no profit or a loss. Continue?')) {
      return;
    }
  }
  
  if (isNaN(currentStock) || currentStock < 0) {
    showToast('Please enter a valid current stock (0 or greater)', 'error');
    return;
  }
  
  if (isNaN(minStock) || minStock < 0) {
    showToast('Please enter a valid minimum stock (0 or greater)', 'error');
    return;
  }
  
  if (isNaN(maxStock) || maxStock < minStock) {
    showToast('Maximum stock must be greater than or equal to minimum stock', 'error');
    return;
  }
  
  const categories = dataStore.categories || applicationData.categories;
  const category = categories.find(c => c.id === categoryId);
  
  const formData = {
    name,
    sku,
    category_id: categoryId,
    category: category?.name || 'Unknown',
    price,
    cost,
    current_stock: currentStock,
    min_stock: minStock,
    max_stock: maxStock,
    size: document.getElementById('productSize')?.value || '',
    color: document.getElementById('productColor')?.value || '',
    material: document.getElementById('productMaterial')?.value || '',
    brand: document.getElementById('productBrand')?.value || '',
    season: document.getElementById('productSeason')?.value || '',
    description: document.getElementById('productDescription').value.trim() || '',
    image_url: document.getElementById('productImage').value.trim() || 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=150',
    created_by: currentUser.name,
    created_date: new Date().toISOString().substring(0, 10),
    last_updated: new Date().toISOString().substring(0, 10)
  };
  
  if (editingProduct) {
    // Update existing product
    const oldStock = editingProduct.current_stock;
    Object.assign(editingProduct, formData);
    
    // Update in dataStore as well
    if (dataStore.products) {
      const dataStoreProduct = dataStore.products.find(p => p.id === editingProduct.id);
      if (dataStoreProduct) {
        Object.assign(dataStoreProduct, formData);
      }
    }
    
    showToast('Product updated successfully', 'success');
    addActivity(currentUser.name, 'Updated product', `${formData.name} (${formData.sku})`);
    
    // Track stock change if any
    if (oldStock !== currentStock) {
      const stockChange = currentStock - oldStock;
      addStockMovement(editingProduct, stockChange, 'Product update', oldStock, currentStock);
    }
  } else {
    // Add new product
    const newProduct = {
      id: Date.now(),
      ...formData
    };
    
    applicationData.products.push(newProduct);
    if (dataStore.products) {
      dataStore.products.push({ ...newProduct });
    }
    
    showToast('Product added successfully', 'success');
    addActivity(currentUser.name, 'Added new product', `${formData.name} (${formData.sku}) with ${currentStock} units`);
    
    // Track initial stock if any
    if (currentStock > 0) {
      addStockMovement(newProduct, currentStock, 'Initial stock', 0, currentStock);
    }
  }
  
  hideProductModal();
  renderProductsTable();
  updateKPIs();
}

function adjustStock(productId, change) {
  if (!hasPermission('update_stock') && !hasPermission('manage_products')) {
    showToast('You do not have permission to adjust stock', 'error');
    return;
  }
  
  const reason = change > 0 ? 'Stock replenishment' : 'Stock reduction';
  adjustStockWithReason(productId, change, reason);
}

// View product details function
function viewProduct(productId) {
  const product = (dataStore.products || applicationData.products).find(p => p.id === productId);
  if (!product) return;
  
  const stockStatus = getStockStatus(product);
  const movements = applicationData.stock_movements ? 
    applicationData.stock_movements.filter(m => m.product_id === productId).slice(0, 5) : [];
  
  const modalContent = `
    <div class="product-details-modal">
      <div class="product-header">
        <img src="${product.image_url}" alt="${product.name}" class="product-image"
             onerror="this.src='https://images.unsplash.com/photo-1445205170230-053b83016050?w=150'">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="product-sku">SKU: ${product.sku}</p>
          <p class="product-description">${product.description}</p>
        </div>
      </div>
      
      <div class="product-stats">
        <div class="stat-item">
          <label>Category:</label>
          <span class="status status--info">${product.category}</span>
        </div>
        <div class="stat-item">
          <label>Current Stock:</label>
          <span class="stock-badge ${stockStatus.class}">${product.current_stock}</span>
        </div>
        <div class="stat-item">
          <label>Size:</label>
          <span>${product.size || 'N/A'}</span>
        </div>
        <div class="stat-item">
          <label>Color:</label>
          <span>${product.color || 'N/A'}</span>
        </div>
        <div class="stat-item">
          <label>Material:</label>
          <span>${product.material || 'N/A'}</span>
        </div>
        <div class="stat-item">
          <label>Brand:</label>
          <span>${product.brand || 'N/A'}</span>
        </div>
        <div class="stat-item">
          <label>Season:</label>
          <span>${product.season || 'N/A'}</span>
        </div>
        <div class="stat-item">
          <label>Price:</label>
          <span>$${product.price.toFixed(2)}</span>
        </div>
        <div class="stat-item">
          <label>Cost:</label>
          <span>$${product.cost.toFixed(2)}</span>
        </div>
        <div class="stat-item">
          <label>Profit Margin:</label>
          <span>${(((product.price - product.cost) / product.price) * 100).toFixed(1)}%</span>
        </div>
      </div>
      
      ${movements.length > 0 ? `
        <div class="recent-movements">
          <h4>Recent Stock Movements</h4>
          <div class="movements-list">
            ${movements.map(m => `
              <div class="movement-item">
                <span class="movement-type ${m.movement_type}">
                  ${m.movement_type === 'increase' ? '+' : '-'}${m.quantity}
                </span>
                <span class="movement-reason">${m.reason}</span>
                <span class="movement-user">${m.user}</span>
                <span class="movement-time">${formatTime(m.timestamp)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
  
  showCustomModal('Clothing Item Details', modalContent, [
    { text: 'Close', class: 'btn--secondary', onclick: 'hideCustomModal()' },
    ...(hasPermission('manage_products') ? [{ text: 'Edit Item', class: 'btn--primary', onclick: `hideCustomModal(); editProduct(${productId})` }] : [])
  ]);
}

function deleteProduct(productId) {
  if (!hasPermission('delete_products')) {
    showToast('You do not have permission to delete items', 'error');
    return;
  }
  
  const products = dataStore.products || applicationData.products;
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const confirmMessage = `Are you sure you want to delete "${product.name}"?\n\nThis action cannot be undone.\n\nCurrent stock: ${product.current_stock} units\nValue: $${(product.current_stock * product.price).toFixed(2)}`;
  
  if (!confirm(confirmMessage)) return;
  
  // Remove from both data stores
  const appDataIndex = applicationData.products.findIndex(p => p.id === productId);
  if (appDataIndex !== -1) {
    applicationData.products.splice(appDataIndex, 1);
  }
  
  if (dataStore.products) {
    const dataStoreIndex = dataStore.products.findIndex(p => p.id === productId);
    if (dataStoreIndex !== -1) {
      dataStore.products.splice(dataStoreIndex, 1);
    }
  }
  
  showToast('Clothing item deleted successfully', 'success');
  addActivity(currentUser.name, 'Deleted clothing item', `${product.name} (${product.sku}) - ${product.current_stock} units valued at $${(product.current_stock * product.price).toFixed(2)}`);
  
  renderProductsTable();
  updateKPIs();
  updateProductStats();
}

// Categories functions
function loadCategories() {
  renderCategoriesGrid();
  updateCategoryStats();
}

function updateCategoryStats() {
  const categories = dataStore.categories || applicationData.categories;
  const products = dataStore.products || applicationData.products;
  
  // Update category statistics
  categories.forEach(category => {
    const categoryProducts = products.filter(p => p.category_id === category.id);
    category.product_count = categoryProducts.length;
    category.total_stock = categoryProducts.reduce((sum, p) => sum + p.current_stock, 0);
    category.total_value = categoryProducts.reduce((sum, p) => sum + (p.current_stock * p.price), 0);
  });
}

function renderCategoriesGrid() {
  const grid = document.getElementById('categoriesGrid');
  const categories = dataStore.categories || applicationData.categories;
  const products = dataStore.products || applicationData.products;
  
  if (categories.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        <i class="fas fa-tags" style="font-size: 3em; color: var(--color-text-secondary); margin-bottom: 20px; display: block;"></i>
        <h3 style="color: var(--color-text-secondary); margin-bottom: 10px;">No Categories Found</h3>
        <p style="color: var(--color-text-secondary); margin-bottom: 20px;">Create your first category to start organizing your products.</p>
        ${hasPermission('manage_categories') ? `<button class="btn btn--primary" onclick="showAddCategoryModal()">Add First Category</button>` : ''}
      </div>
    `;
    return;
  }
  
  grid.innerHTML = categories.map(category => {
    const categoryProducts = products.filter(p => p.category_id === category.id);
    const productCount = categoryProducts.length;
    const totalStock = categoryProducts.reduce((sum, p) => sum + p.current_stock, 0);
    const totalValue = categoryProducts.reduce((sum, p) => sum + (p.current_stock * p.price), 0);
    const lowStockCount = categoryProducts.filter(p => p.current_stock < p.min_stock).length;
    
    const canEdit = hasPermission('manage_categories');
    const canDelete = hasPermission('manage_categories');
    
    return `
      <div class="category-card" data-category-id="${category.id}">
        <div class="category-header">
          <h4 class="category-name">${category.name}</h4>
          ${(canEdit || canDelete) ? `
            <div class="action-buttons">
              ${canEdit ? `
                <button class="btn btn--sm btn--outline btn-icon" onclick="editCategory(${category.id})" title="Edit Category">
                  <i class="fas fa-edit"></i>
                </button>
              ` : ''}
              <button class="btn btn--sm btn--outline btn-icon" onclick="viewCategoryDetails(${category.id})" title="View Details">
                <i class="fas fa-eye"></i>
              </button>
              ${canDelete ? `
                <button class="btn btn--sm btn--outline btn-icon" onclick="deleteCategory(${category.id})" title="Delete Category" style="color: var(--color-error);">
                  <i class="fas fa-trash"></i>
                </button>
              ` : ''}
            </div>
          ` : ''}
        </div>
        <p class="category-description">${category.description || 'No description provided'}</p>
        <div class="category-stats">
          <div class="stat-row">
            <span class="stat-label">Products:</span>
            <span class="stat-value"><strong>${productCount}</strong></span>
          </div>
          <div class="stat-row">
            <span class="stat-label">Total Stock:</span>
            <span class="stat-value"><strong>${totalStock.toLocaleString()}</strong> items</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">Total Value:</span>
            <span class="stat-value"><strong>$${totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></span>
          </div>
          ${lowStockCount > 0 ? `
            <div class="stat-row alert">
              <span class="stat-label">Low Stock:</span>
              <span class="stat-value warning"><strong>${lowStockCount}</strong> items</span>
            </div>
          ` : ''}
        </div>
        <div class="category-actions">
          <button class="btn btn--sm btn--outline" onclick="filterProductsByCategory('${category.name}')" title="View Products">
            <i class="fas fa-box"></i> View Products
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function viewCategoryDetails(categoryId) {
  const categories = dataStore.categories || applicationData.categories;
  const products = dataStore.products || applicationData.products;
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) return;
  
  const categoryProducts = products.filter(p => p.category_id === categoryId);
  const lowStockProducts = categoryProducts.filter(p => p.current_stock < p.min_stock);
  
  const modalContent = `
    <div class="category-details-modal">
      <div class="category-info">
        <h3>${category.name}</h3>
        <p class="category-description">${category.description || 'No description provided'}</p>
        <div class="category-meta">
          <small>Created by: ${category.created_by || 'Unknown'}</small>
          ${category.created_date ? `<small>Created: ${category.created_date}</small>` : ''}
        </div>
      </div>
      
      <div class="category-products">
        <h4>Products in this Category (${categoryProducts.length})</h4>
        ${categoryProducts.length > 0 ? `
          <div class="products-list">
            ${categoryProducts.slice(0, 10).map(product => {
              const stockStatus = getStockStatus(product);
              return `
                <div class="product-item">
                  <img src="${product.image_url}" alt="${product.name}" class="product-thumb">
                  <div class="product-info">
                    <strong>${product.name}</strong>
                    <div class="product-meta">
                      <span>SKU: ${product.sku}</span>
                      <span class="stock-badge ${stockStatus.class}">${product.current_stock}</span>
                      <span>$${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
            ${categoryProducts.length > 10 ? `<p><em>... and ${categoryProducts.length - 10} more products</em></p>` : ''}
          </div>
        ` : '<p style="color: var(--color-text-secondary);">No products in this category yet.</p>'}
      </div>
      
      ${lowStockProducts.length > 0 ? `
        <div class="low-stock-alert">
          <h4 style="color: var(--color-warning);">⚠️ Low Stock Alert</h4>
          <p>${lowStockProducts.length} product(s) in this category are below minimum stock level:</p>
          <ul>
            ${lowStockProducts.map(p => `<li>${p.name} (${p.current_stock}/${p.min_stock})</li>`).join('')}
          </ul>
        </div>
      ` : ''}
    </div>
  `;
  
  showCustomModal('Category Details', modalContent, [
    { text: 'Close', class: 'btn--secondary', onclick: 'hideCustomModal()' },
    { text: 'View All Products', class: 'btn--outline', onclick: `hideCustomModal(); filterProductsByCategory('${category.name}')` },
    ...(hasPermission('manage_categories') ? [{ text: 'Edit Category', class: 'btn--primary', onclick: `hideCustomModal(); editCategory(${categoryId})` }] : [])
  ]);
}

function filterProductsByCategory(categoryName) {
  navigateToSection('products');
  setTimeout(() => {
    document.getElementById('categoryFilter').value = categoryName;
    filterProducts();
  }, 100);
}

function showAddCategoryModal() {
  if (!hasPermission('manage_categories')) {
    showToast('You do not have permission to manage categories', 'error');
    return;
  }
  
  showCategoryFormModal();
}

function showCategoryFormModal(categoryId = null) {
  const categories = dataStore.categories || applicationData.categories;
  const category = categoryId ? categories.find(c => c.id === categoryId) : null;
  const isEditing = !!category;
  
  const modalContent = `
    <form id="categoryForm" class="category-form">
      <div class="form-group">
        <label class="form-label">Category Name *</label>
        <input type="text" id="categoryName" class="form-control" required 
               value="${category ? category.name : ''}" 
               placeholder="Enter category name">
      </div>
      <div class="form-group">
        <label class="form-label">Description</label>
        <textarea id="categoryDescription" class="form-control" rows="3" 
                  placeholder="Enter category description (optional)">${category ? category.description : ''}</textarea>
      </div>
      <div class="form-group">
        <small class="form-help">* Required fields</small>
      </div>
    </form>
  `;
  
  showCustomModal(
    isEditing ? 'Edit Category' : 'Add New Category',
    modalContent,
    [
      { text: 'Cancel', class: 'btn--secondary', onclick: 'hideCustomModal()' },
      { text: isEditing ? 'Update Category' : 'Add Category', class: 'btn--primary', onclick: `handleCategorySubmit(${categoryId})` }
    ]
  );
  
  // Focus on name input
  setTimeout(() => document.getElementById('categoryName').focus(), 100);
}

function handleCategorySubmit(categoryId = null) {
  const name = document.getElementById('categoryName').value.trim();
  const description = document.getElementById('categoryDescription').value.trim();
  
  if (!name || name.length < 2) {
    showToast('Category name must be at least 2 characters', 'error');
    return;
  }
  
  const categories = dataStore.categories || applicationData.categories;
  
  // Check for duplicate name
  const existingCategory = categories.find(c => 
    c.name.toLowerCase() === name.toLowerCase() && 
    (!categoryId || c.id !== categoryId)
  );
  
  if (existingCategory) {
    showToast('Category name already exists', 'error');
    return;
  }
  
  if (categoryId) {
    // Update existing category
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      const oldName = category.name;
      category.name = name;
      category.description = description;
      
      // Update category in dataStore as well
      if (dataStore.categories) {
        const dataStoreCategory = dataStore.categories.find(c => c.id === categoryId);
        if (dataStoreCategory) {
          dataStoreCategory.name = name;
          dataStoreCategory.description = description;
        }
      }
      
      // Update products that reference this category
      const products = dataStore.products || applicationData.products;
      products.forEach(product => {
        if (product.category_id === categoryId) {
          product.category = name;
        }
      });
      
      showToast('Category updated successfully', 'success');
      addActivity(currentUser.name, 'Updated category', `${oldName} → ${name}`, 'category_update');
    }
  } else {
    // Add new category
    const newCategory = {
      id: Date.now(),
      name,
      description,
      created_by: currentUser.name,
      created_date: new Date().toISOString().substring(0, 10)
    };
    
    applicationData.categories.push(newCategory);
    if (dataStore.categories) {
      dataStore.categories.push({ ...newCategory });
    }
    
    showToast('Category added successfully', 'success');
    addActivity(currentUser.name, 'Added new category', name, 'category_create');
  }
  
  hideCustomModal();
  renderCategoriesGrid();
  
  // Update category filters in products section
  populateCategoryFilter();
  populateProductFormSelects();
}

function editCategory(categoryId) {
  if (!hasPermission('manage_categories')) {
    showToast('You do not have permission to edit categories', 'error');
    return;
  }
  
  showCategoryFormModal(categoryId);
}

function deleteCategory(categoryId) {
  if (!hasPermission('manage_categories')) {
    showToast('You do not have permission to delete categories', 'error');
    return;
  }
  
  const categories = dataStore.categories || applicationData.categories;
  const products = dataStore.products || applicationData.products;
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) return;
  
  const hasProducts = products.some(p => p.category_id === categoryId);
  if (hasProducts) {
    const productCount = products.filter(p => p.category_id === categoryId).length;
    showToast(`Cannot delete category "${category.name}" - it contains ${productCount} product(s). Please move or delete the products first.`, 'error');
    return;
  }
  
  const confirmMessage = `Are you sure you want to delete the category "${category.name}"?\n\nThis action cannot be undone.`;
  if (!confirm(confirmMessage)) return;
  
  // Remove from both data stores
  const appDataIndex = applicationData.categories.findIndex(c => c.id === categoryId);
  if (appDataIndex !== -1) {
    applicationData.categories.splice(appDataIndex, 1);
  }
  
  if (dataStore.categories) {
    const dataStoreIndex = dataStore.categories.findIndex(c => c.id === categoryId);
    if (dataStoreIndex !== -1) {
      dataStore.categories.splice(dataStoreIndex, 1);
    }
  }
  
  showToast('Category deleted successfully', 'success');
  addActivity(currentUser.name, 'Deleted category', category.name, 'category_delete');
  
  renderCategoriesGrid();
  
  // Update category filters
  populateCategoryFilter();
  populateProductFormSelects();
}

// Reports functions
function loadReports() {
  loadLowStockReport();
  loadCategorySummary();
  loadStockMovementReport();
  loadUserActivityReport();
}

function loadStockMovementReport() {
  if (!applicationData.stock_movements || applicationData.stock_movements.length === 0) {
    return;
  }
  
  // Add stock movement report section to the reports grid if it doesn't exist
  const reportsGrid = document.querySelector('.reports-grid');
  let movementReportCard = document.getElementById('stockMovementReport');
  
  if (!movementReportCard) {
    movementReportCard = document.createElement('div');
    movementReportCard.className = 'card';
    movementReportCard.innerHTML = `
      <div class="card__body">
        <h3>Recent Stock Movements</h3>
        <div class="report-content">
          <div id="stockMovementReportContent"></div>
        </div>
      </div>
    `;
    reportsGrid.appendChild(movementReportCard);
  }
  
  const container = document.getElementById('stockMovementReportContent');
  const recentMovements = applicationData.stock_movements.slice(0, 10);
  
  container.innerHTML = recentMovements.map(movement => `
    <div class="report-item">
      <div>
        <strong>${movement.product_name}</strong><br>
        <small style="color: var(--color-text-secondary);">${movement.reason} by ${movement.user}</small>
      </div>
      <div style="text-align: right;">
        <span class="stock-badge ${movement.movement_type === 'increase' ? 'normal' : 'low'}">
          ${movement.movement_type === 'increase' ? '+' : '-'}${movement.quantity}
        </span><br>
        <small style="color: var(--color-text-secondary);">${formatTimeAgo(movement.timestamp)}</small>
      </div>
    </div>
  `).join('');
}

function loadUserActivityReport() {
  if (currentUser.role !== 'Admin') return;
  
  const reportsGrid = document.querySelector('.reports-grid');
  let activityReportCard = document.getElementById('userActivityReport');
  
  if (!activityReportCard) {
    activityReportCard = document.createElement('div');
    activityReportCard.className = 'card';
    activityReportCard.innerHTML = `
      <div class="card__body">
        <h3>User Activity Summary</h3>
        <div class="report-content">
          <div id="userActivityReportContent"></div>
        </div>
      </div>
    `;
    reportsGrid.appendChild(activityReportCard);
  }
  
  const container = document.getElementById('userActivityReportContent');
  const users = dataStore.users || applicationData.users;
  const activities = dataStore.activities || applicationData.activities;
  
  const userActivitySummary = users.map(user => {
    const userActivities = activities.filter(a => a.user === user.name);
    return {
      name: user.name,
      role: user.role,
      activityCount: userActivities.length,
      lastActivity: userActivities.length > 0 ? userActivities[0].timestamp : null
    };
  }).sort((a, b) => b.activityCount - a.activityCount);
  
  container.innerHTML = userActivitySummary.map(user => `
    <div class="report-item">
      <div>
        <strong>${user.name}</strong><br>
        <small style="color: var(--color-text-secondary);">${user.role}</small>
      </div>
      <div style="text-align: right;">
        <strong>${user.activityCount} actions</strong><br>
        <small style="color: var(--color-text-secondary);">
          ${user.lastActivity ? `Last: ${formatTimeAgo(user.lastActivity)}` : 'No activity'}
        </small>
      </div>
    </div>
  `).join('');
}

function loadLowStockReport() {
  const container = document.getElementById('lowStockReport');
  const products = dataStore.products || applicationData.products;
  const lowStockProducts = products.filter(p => p.current_stock < p.min_stock);
  const outOfStockProducts = products.filter(p => p.current_stock === 0);
  
  if (lowStockProducts.length === 0 && outOfStockProducts.length === 0) {
    container.innerHTML = `
      <div class="empty-report">
        <i class="fas fa-check-circle" style="color: var(--color-success); font-size: 2em; margin-bottom: 10px;"></i>
        <p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">All products are adequately stocked!</p>
      </div>
    `;
    return;
  }
  
  // Combine and sort by urgency (out of stock first, then by how far below minimum)
  const allLowStock = [...outOfStockProducts, ...lowStockProducts.filter(p => p.current_stock > 0)]
    .sort((a, b) => {
      if (a.current_stock === 0 && b.current_stock > 0) return -1;
      if (b.current_stock === 0 && a.current_stock > 0) return 1;
      return (a.current_stock / a.min_stock) - (b.current_stock / b.min_stock);
    });
  
  container.innerHTML = allLowStock.map(product => {
    const urgencyLevel = product.current_stock === 0 ? 'critical' : 
                        (product.current_stock / product.min_stock) < 0.5 ? 'high' : 'medium';
    const urgencyColor = urgencyLevel === 'critical' ? 'var(--color-error)' : 
                        urgencyLevel === 'high' ? 'var(--color-warning)' : 'var(--color-info)';
    
    return `
      <div class="report-item low-stock-item" data-urgency="${urgencyLevel}">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <i class="fas fa-${urgencyLevel === 'critical' ? 'times-circle' : 'exclamation-triangle'}" 
               style="color: ${urgencyColor};"></i>
            <strong>${product.name}</strong>
          </div>
          <small style="color: var(--color-text-secondary);">SKU: ${product.sku} | Category: ${product.category}</small>
        </div>
        <div style="text-align: right;">
          <span class="stock-badge ${product.current_stock === 0 ? 'critical' : 'low'}">
            ${product.current_stock}
          </span><br>
          <small style="color: var(--color-text-secondary);">Min: ${product.min_stock}</small>
          <br>
          <small style="color: ${urgencyColor}; font-weight: 500;">
            ${product.current_stock === 0 ? 'OUT OF STOCK' : `${Math.round((1 - product.current_stock / product.min_stock) * 100)}% below min`}
          </small>
        </div>
      </div>
    `;
  }).join('');
}

function loadCategorySummary() {
  const container = document.getElementById('categorySummary');
  const categories = dataStore.categories || applicationData.categories;
  const products = dataStore.products || applicationData.products;
  
  const summary = categories.map(category => {
    const categoryProducts = products.filter(p => p.category_id === category.id);
    const totalStock = categoryProducts.reduce((sum, p) => sum + p.current_stock, 0);
    const totalValue = categoryProducts.reduce((sum, p) => sum + (p.current_stock * p.price), 0);
    const lowStockItems = categoryProducts.filter(p => p.current_stock < p.min_stock).length;
    
    return {
      name: category.name,
      productCount: categoryProducts.length,
      totalStock,
      totalValue,
      lowStockItems,
      averageValue: categoryProducts.length > 0 ? totalValue / categoryProducts.length : 0
    };
  }).sort((a, b) => b.totalValue - a.totalValue);
  
  container.innerHTML = summary.map(cat => {
    const hasLowStock = cat.lowStockItems > 0;
    return `
      <div class="report-item category-summary-item" ${hasLowStock ? 'data-has-alerts="true"' : ''}>
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <strong>${cat.name}</strong>
            ${hasLowStock ? `<i class="fas fa-exclamation-triangle" style="color: var(--color-warning);" title="${cat.lowStockItems} low stock items"></i>` : ''}
          </div>
          <small style="color: var(--color-text-secondary);">${cat.productCount} products</small>
          ${hasLowStock ? `<br><small style="color: var(--color-warning);">${cat.lowStockItems} low stock alerts</small>` : ''}
        </div>
        <div style="text-align: right;">
          <strong>${cat.totalStock.toLocaleString()} items</strong><br>
          <strong style="color: var(--color-success);">$${cat.totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong><br>
          <small style="color: var(--color-text-secondary);">Avg: $${cat.averageValue.toFixed(2)}/item</small>
        </div>
      </div>
    `;
  }).join('');
  
  if (summary.length === 0) {
    container.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No categories available</p>';
  }
}

// Users functions
function loadUsers() {
  if (currentUser.role !== 'Admin') {
    document.getElementById('usersSection').innerHTML = `
      <div class="access-denied">
        <i class="fas fa-lock" style="font-size: 3em; color: var(--color-text-secondary); margin-bottom: 20px;"></i>
        <h3>Access Denied</h3>
        <p>You need administrator privileges to manage users.</p>
      </div>
    `;
    return;
  }
  
  updateUsersStats();
  renderUsersTable();
}

function showAddUserModal() {
  const name = prompt('User Name:');
  if (!name) return;
  
  const email = prompt('User Email:');
  if (!email) return;
  
  const role = prompt('User Role (Admin/Manager/Staff):');
  if (!role || !['Admin', 'Manager', 'Staff'].includes(role)) return;
  
  const password = prompt('Password:');
  if (!password) return;
  
  if (sampleData.users.some(u => u.email === email)) {
    showToast('Email already exists', 'error');
    return;
  }
  
  const newUser = {
    id: Date.now(),
    name,
    email,
    role,
    password,
    active: true
  };
  
  sampleData.users.push(newUser);
  showToast('User added successfully', 'success');
  addActivity(currentUser.name, 'Added new user', name);
  loadUsers();
}

function editUser(userId) {
  const user = sampleData.users.find(u => u.id === userId);
  if (!user) return;
  
  const name = prompt('User Name:', user.name);
  if (!name) return;
  
  const email = prompt('User Email:', user.email);
  if (!email) return;
  
  const role = prompt('User Role (Admin/Manager/Staff):', user.role);
  if (!role || !['Admin', 'Manager', 'Staff'].includes(role)) return;
  
  user.name = name;
  user.email = email;
  user.role = role;
  
  showToast('User updated successfully', 'success');
  addActivity(currentUser.name, 'Updated user', name);
  loadUsers();
}

function toggleUserStatus(userId) {
  const user = sampleData.users.find(u => u.id === userId);
  if (!user) return;
  
  user.active = !user.active;
  
  showToast(`User ${user.active ? 'activated' : 'deactivated'} successfully`, 'success');
  addActivity(currentUser.name, `${user.active ? 'Activated' : 'Deactivated'} user`, user.name);
  loadUsers();
}

// Settings functions
function loadSettings() {
  document.getElementById('profileName').value = currentUser.name;
  document.getElementById('profileEmail').value = currentUser.email;
  document.getElementById('profileRole').value = currentUser.role;
  
  // Load system preferences
  loadSystemPreferences();
}

function loadSystemPreferences() {
  // In a real app, these would be loaded from user preferences or system settings
  document.getElementById('emailNotifications').checked = true;
  document.getElementById('autoReorder').checked = true;
  
  const stockThreshold = document.getElementById('stockThreshold');
  stockThreshold.value = 20;
  updateRangeValue(stockThreshold);
  
  // Add event listener for range slider
  stockThreshold.addEventListener('input', function() {
    updateRangeValue(this);
  });
}

function updateRangeValue(range) {
  const valueDisplay = range.nextElementSibling;
  if (valueDisplay && valueDisplay.classList.contains('range-value')) {
    valueDisplay.textContent = range.value + '%';
  }
}

function saveSystemPreferences() {
  const emailNotifications = document.getElementById('emailNotifications').checked;
  const autoReorder = document.getElementById('autoReorder').checked;
  const stockThreshold = document.getElementById('stockThreshold').value;
  
  // In a real app, these would be saved to the backend
  showToast('System preferences saved successfully', 'success');
  addActivity(currentUser.name, 'Updated preferences', `Email notifications: ${emailNotifications ? 'On' : 'Off'}, Auto-reorder: ${autoReorder ? 'On' : 'Off'}, Threshold: ${stockThreshold}%`, 'settings_update');
}

function changePassword() {
  const currentPassword = prompt('Enter your current password:');
  if (!currentPassword) return;
  
  if (currentPassword !== currentUser.password) {
    showToast('Current password is incorrect', 'error');
    return;
  }
  
  const newPassword = prompt('Enter your new password:');
  if (!newPassword || newPassword.length < 6) {
    showToast('New password must be at least 6 characters', 'error');
    return;
  }
  
  const confirmPassword = prompt('Confirm your new password:');
  if (newPassword !== confirmPassword) {
    showToast('Passwords do not match', 'error');
    return;
  }
  
  // Update password
  currentUser.password = newPassword;
  
  // Update in data stores
  const users = dataStore.users || applicationData.users;
  const user = users.find(u => u.id === currentUser.id);
  if (user) {
    user.password = newPassword;
  }
  
  if (dataStore.users) {
    const dataStoreUser = dataStore.users.find(u => u.id === currentUser.id);
    if (dataStoreUser) {
      dataStoreUser.password = newPassword;
    }
  }
  
  showToast('Password changed successfully', 'success');
  addActivity(currentUser.name, 'Changed password', 'Password updated for security', 'security_update');
}

function logoutAllSessions() {
  if (confirm('This will log you out from all devices. Continue?')) {
    addActivity(currentUser.name, 'Security action', 'Logged out from all sessions', 'security_update');
    handleLogout();
  }
}

function handleProfileUpdate(e) {
  e.preventDefault();
  
  const name = document.getElementById('profileName').value;
  const email = document.getElementById('profileEmail').value;
  
  if (sampleData.users.some(u => u.email === email && u.id !== currentUser.id)) {
    showToast('Email already exists', 'error');
    return;
  }
  
  currentUser.name = name;
  currentUser.email = email;
  
  // Update header
  document.querySelector('.user-name').textContent = name;
  
  showToast('Profile updated successfully', 'success');
  addActivity(currentUser.name, 'Updated profile', 'Profile information');
}

// UI helper functions
function toggleMobileMenu() {
  document.getElementById('sidebar').classList.toggle('show');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

function toggleUserDropdown() {
  document.getElementById('userDropdownMenu').classList.toggle('show');
}

// Form population functions
function populateFormOptions() {
  // This is called once on app initialization to populate any static form options
  // Most form populations are done dynamically when modals are opened
}

// Export functionality
function exportData(type) {
  if (!hasPermission('export_data')) {
    showToast('You do not have permission to export data', 'error');
    return;
  }
  
  let data, filename, headers;
  
  switch(type) {
    case 'products':
      data = dataStore.products || applicationData.products;
      filename = `products_${new Date().toISOString().substring(0, 10)}.csv`;
      headers = ['Name', 'SKU', 'Category', 'Price', 'Cost', 'Current Stock', 'Min Stock', 'Max Stock', 'Description'];
      break;
    case 'categories':
      data = dataStore.categories || applicationData.categories;
      filename = `categories_${new Date().toISOString().substring(0, 10)}.csv`;
      headers = ['Name', 'Description', 'Created By', 'Created Date'];
      break;
    case 'users':
      if (currentUser.role !== 'Admin') {
        showToast('You do not have permission to export user data', 'error');
        return;
      }
      data = dataStore.users || applicationData.users;
      filename = `users_${new Date().toISOString().substring(0, 10)}.csv`;
      headers = ['Name', 'Email', 'Role', 'Active', 'Created Date', 'Last Login'];
      break;
    case 'stock_movements':
      data = applicationData.stock_movements || [];
      filename = `stock_movements_${new Date().toISOString().substring(0, 10)}.csv`;
      headers = ['Product Name', 'Movement Type', 'Quantity', 'Reason', 'User', 'Timestamp', 'Old Stock', 'New Stock'];
      break;
    default:
      showToast('Invalid export type', 'error');
      return;
  }
  
  if (!data || data.length === 0) {
    showToast(`No ${type} data to export`, 'warning');
    return;
  }
  
  try {
    const csv = convertToCSV(data, headers, type);
    downloadCSV(csv, filename);
    showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} data exported successfully`, 'success');
    addActivity(currentUser.name, 'Exported data', `${type} export (${data.length} records)`, 'data_export');
  } catch (error) {
    showToast('Failed to export data', 'error');
    console.error('Export error:', error);
  }
}

function convertToCSV(data, headers, type) {
  const csvHeaders = headers.join(',');
  
  const csvRows = data.map(item => {
    switch(type) {
      case 'products':
        return [
          `"${item.name}"`,
          `"${item.sku}"`,
          `"${item.category}"`,
          item.price,
          item.cost,
          item.current_stock,
          item.min_stock,
          item.max_stock,
          `"${item.description.replace(/"/g, '""')}"`
        ].join(',');
      case 'categories':
        return [
          `"${item.name}"`,
          `"${item.description || ''}"`,
          `"${item.created_by || ''}"`,
          `"${item.created_date || ''}"`
        ].join(',');
      case 'users':
        return [
          `"${item.name}"`,
          `"${item.email}"`,
          `"${item.role}"`,
          item.active ? 'Yes' : 'No',
          `"${item.created_date || ''}"`,
          `"${item.last_login || 'Never'}"`
        ].join(',');
      case 'stock_movements':
        return [
          `"${item.product_name}"`,
          `"${item.movement_type}"`,
          item.quantity,
          `"${item.reason}"`,
          `"${item.user}"`,
          `"${item.timestamp}"`,
          item.old_stock,
          item.new_stock
        ].join(',');
      default:
        return '';
    }
  });
  
  return [csvHeaders, ...csvRows].join('\n');
}

function downloadCSV(csv, filename) {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

// Bulk operations
function showBulkOperationsModal() {
  if (!hasPermission('bulk_operations')) {
    showToast('You do not have permission to perform bulk operations', 'error');
    return;
  }
  
  const modalContent = `
    <div class="bulk-operations">
      <h4>Export Data</h4>
      <div class="export-options">
        <button class="btn btn--outline" onclick="exportData('products')">
          <i class="fas fa-download"></i> Export Products
        </button>
        <button class="btn btn--outline" onclick="exportData('categories')">
          <i class="fas fa-download"></i> Export Categories
        </button>
        ${currentUser.role === 'Admin' ? `
          <button class="btn btn--outline" onclick="exportData('users')">
            <i class="fas fa-download"></i> Export Users
          </button>
        ` : ''}
        <button class="btn btn--outline" onclick="exportData('stock_movements')">
          <i class="fas fa-download"></i> Export Stock Movements
        </button>
      </div>
      
      <h4>Bulk Stock Operations</h4>
      <div class="bulk-stock-options">
        <button class="btn btn--outline" onclick="showBulkStockAdjustment()">
          <i class="fas fa-warehouse"></i> Bulk Stock Adjustment
        </button>
        <button class="btn btn--outline" onclick="showLowStockReorder()">
          <i class="fas fa-shopping-cart"></i> Generate Reorder List
        </button>
      </div>
    </div>
  `;
  
  showCustomModal('Bulk Operations', modalContent, [
    { text: 'Close', class: 'btn--secondary', onclick: 'hideCustomModal()' }
  ]);
}

function showBulkStockAdjustment() {
  const products = dataStore.products || applicationData.products;
  const lowStockProducts = products.filter(p => p.current_stock < p.min_stock);
  
  if (lowStockProducts.length === 0) {
    showToast('No products require stock adjustment', 'info');
    return;
  }
  
  const modalContent = `
    <div class="bulk-stock-adjustment">
      <p>Adjust stock for ${lowStockProducts.length} product(s) below minimum level:</p>
      <div class="adjustment-list">
        ${lowStockProducts.map(product => `
          <div class="adjustment-item">
            <div class="product-info">
              <strong>${product.name}</strong><br>
              <small>Current: ${product.current_stock} | Min: ${product.min_stock}</small>
            </div>
            <div class="adjustment-controls">
              <button class="btn btn--sm btn--outline" onclick="adjustStockToMin(${product.id})">
                Set to Min (${product.min_stock})
              </button>
              <button class="btn btn--sm btn--primary" onclick="adjustStockToOptimal(${product.id})">
                Set to Optimal (${Math.floor((product.min_stock + product.max_stock) / 2)})
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  showCustomModal('Bulk Stock Adjustment', modalContent, [
    { text: 'Close', class: 'btn--secondary', onclick: 'hideCustomModal()' }
  ]);
}

function adjustStockToMin(productId) {
  const products = dataStore.products || applicationData.products;
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const adjustment = product.min_stock - product.current_stock;
  adjustStockWithReason(productId, adjustment, 'Bulk adjustment to minimum level');
  hideCustomModal();
}

function adjustStockToOptimal(productId) {
  const products = dataStore.products || applicationData.products;
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const optimal = Math.floor((product.min_stock + product.max_stock) / 2);
  const adjustment = optimal - product.current_stock;
  adjustStockWithReason(productId, adjustment, 'Bulk adjustment to optimal level');
  hideCustomModal();
}

function showLowStockReorder() {
  const products = dataStore.products || applicationData.products;
  const lowStockProducts = products.filter(p => p.current_stock < p.min_stock);
  
  if (lowStockProducts.length === 0) {
    showToast('No products need reordering', 'info');
    return;
  }
  
  const reorderList = lowStockProducts.map(product => {
    const needed = product.min_stock - product.current_stock;
    const optimal = Math.floor((product.min_stock + product.max_stock) / 2);
    const optimalOrder = optimal - product.current_stock;
    
    return {
      ...product,
      needed,
      optimalOrder,
      cost: product.cost * optimalOrder
    };
  });
  
  const totalCost = reorderList.reduce((sum, item) => sum + item.cost, 0);
  
  const modalContent = `
    <div class="reorder-list">
      <div class="reorder-summary">
        <h4>Reorder Summary</h4>
        <p><strong>${reorderList.length}</strong> products need reordering</p>
        <p>Total estimated cost: <strong>$${totalCost.toFixed(2)}</strong></p>
      </div>
      
      <div class="reorder-items">
        <div class="reorder-header">
          <span>Product</span>
          <span>Current</span>
          <span>Min Needed</span>
          <span>Optimal Order</span>
          <span>Cost</span>
        </div>
        ${reorderList.map(item => `
          <div class="reorder-item">
            <div class="product-name">
              <strong>${item.name}</strong><br>
              <small>SKU: ${item.sku}</small>
            </div>
            <span class="stock-current">${item.current_stock}</span>
            <span class="stock-needed">${item.needed}</span>
            <span class="stock-optimal">${item.optimalOrder}</span>
            <span class="item-cost">$${item.cost.toFixed(2)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  showCustomModal('Reorder List', modalContent, [
    { text: 'Close', class: 'btn--secondary', onclick: 'hideCustomModal()' },
    { text: 'Export List', class: 'btn--outline', onclick: 'exportReorderList()' }
  ]);
}

function exportReorderList() {
  const products = dataStore.products || applicationData.products;
  const lowStockProducts = products.filter(p => p.current_stock < p.min_stock);
  
  const reorderData = lowStockProducts.map(product => {
    const needed = product.min_stock - product.current_stock;
    const optimal = Math.floor((product.min_stock + product.max_stock) / 2);
    const optimalOrder = optimal - product.current_stock;
    
    return {
      name: product.name,
      sku: product.sku,
      category: product.category,
      current_stock: product.current_stock,
      min_stock: product.min_stock,
      needed_quantity: needed,
      optimal_order: optimalOrder,
      unit_cost: product.cost,
      total_cost: product.cost * optimalOrder,
      supplier: product.supplier || 'TBD'
    };
  });
  
  const headers = ['Product Name', 'SKU', 'Category', 'Current Stock', 'Min Stock', 'Needed Qty', 'Optimal Order', 'Unit Cost', 'Total Cost', 'Supplier'];
  const csvRows = reorderData.map(item => [
    `"${item.name}"`,
    `"${item.sku}"`,
    `"${item.category}"`,
    item.current_stock,
    item.min_stock,
    item.needed_quantity,
    item.optimal_order,
    item.unit_cost.toFixed(2),
    item.total_cost.toFixed(2),
    `"${item.supplier}"`
  ].join(','));
  
  const csv = [headers.join(','), ...csvRows].join('\n');
  const filename = `reorder_list_${new Date().toISOString().substring(0, 10)}.csv`;
  
  downloadCSV(csv, filename);
  showToast('Reorder list exported successfully', 'success');
  addActivity(currentUser.name, 'Exported reorder list', `${reorderData.length} items`, 'data_export');
  hideCustomModal();
}

// Utility functions
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function addActivity(user, action, details, type = 'general') {
  const newActivity = {
    id: Date.now(),
    user,
    action,
    details,
    type,
    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19)
  };
  
  // Add to both data stores
  applicationData.activities.unshift(newActivity);
  if (dataStore.activities) {
    dataStore.activities.unshift(newActivity);
  }
  
  // Keep only last 50 activities
  if (applicationData.activities.length > 50) {
    applicationData.activities = applicationData.activities.slice(0, 50);
  }
  if (dataStore.activities && dataStore.activities.length > 50) {
    dataStore.activities = dataStore.activities.slice(0, 50);
  }
  
  // Update activities if on dashboard
  if (currentSection === 'dashboard') {
    loadActivities();
  }
}

// Custom modal functionality
function showCustomModal(title, content, buttons = []) {
  // Remove existing custom modal if any
  const existingModal = document.getElementById('customModal');
  if (existingModal) {
    existingModal.remove();
  }
  
  const modal = document.createElement('div');
  modal.id = 'customModal';
  modal.className = 'modal show';
  
  const buttonHTML = buttons.map(btn => 
    `<button class="btn ${btn.class}" onclick="${btn.onclick}">${btn.text}</button>`
  ).join('');
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="modal-close" onclick="hideCustomModal()">&times;</button>
      </div>
      <div class="modal-body" style="padding: var(--space-20);">
        ${content}
      </div>
      ${buttons.length > 0 ? `
        <div class="modal-footer" style="padding: var(--space-20); border-top: 1px solid var(--color-card-border); display: flex; gap: var(--space-12); justify-content: flex-end;">
          ${buttonHTML}
        </div>
      ` : ''}
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideCustomModal();
    }
  });
}

function hideCustomModal() {
  const modal = document.getElementById('customModal');
  if (modal) {
    modal.remove();
  }
}

// Enhanced user management functions
function loadUsers() {
  if (currentUser.role !== 'Admin') {
    document.getElementById('usersSection').innerHTML = `
      <div class="access-denied">
        <i class="fas fa-lock" style="font-size: 3em; color: var(--color-text-secondary); margin-bottom: 20px;"></i>
        <h3>Access Denied</h3>
        <p>You need administrator privileges to manage users.</p>
      </div>
    `;
    return;
  }
  
  updateUsersStats();
  renderUsersTable();
}

function updateUsersStats() {
  const users = dataStore.users || applicationData.users;
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.active).length;
  const adminUsers = users.filter(u => u.role === 'Admin').length;
  const recentLogins = users.filter(u => {
    if (!u.last_login) return false;
    const lastLogin = new Date(u.last_login);
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    return lastLogin > threeDaysAgo;
  }).length;
  
  document.getElementById('totalUsersCount').textContent = totalUsers;
  document.getElementById('activeUsersCount').textContent = activeUsers;
  document.getElementById('adminUsersCount').textContent = adminUsers;
  document.getElementById('recentLoginsCount').textContent = recentLogins;
  
  // Show stats section
  document.querySelector('.users-stats').style.display = 'block';
}

function renderUsersTable() {
  const tbody = document.getElementById('usersTableBody');
  const users = dataStore.users || applicationData.users;
  
  tbody.innerHTML = users.map(user => `
    <tr data-user-id="${user.id}">
      <td>
        <div class="user-info-cell">
          <div class="user-avatar-small">
            <i class="fas fa-user-circle"></i>
          </div>
          <div class="user-details">
            <strong>${user.name}</strong>
            ${user.id === currentUser.id ? '<span class="badge-current-user">You</span>' : ''}
          </div>
        </div>
      </td>
      <td>${user.email}</td>
      <td>
        <span class="status status--info role-badge role-${user.role.toLowerCase()}">${user.role}</span>
      </td>
      <td>
        <span class="status status--${user.active ? 'success' : 'error'}">
          ${user.active ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td>
        <div class="user-meta">
          <small>Joined: ${user.created_date || 'Unknown'}</small>
          ${user.last_login ? `<small>Last login: ${formatDateTime(user.last_login)}</small>` : '<small>Never logged in</small>'}
        </div>
      </td>
      <td>
        <div class="action-buttons">
          <button class="btn btn--sm btn--outline btn-icon" onclick="editUser(${user.id})" title="Edit User">
            <i class="fas fa-edit"></i>
          </button>
          ${user.id !== currentUser.id ? `
            <button class="btn btn--sm btn--outline btn-icon" onclick="toggleUserStatus(${user.id})" 
                    title="${user.active ? 'Deactivate' : 'Activate'} User">
              <i class="fas fa-${user.active ? 'user-times' : 'user-check'}"></i>
            </button>
            <button class="btn btn--sm btn--outline btn-icon" onclick="resetUserPassword(${user.id})" 
                    title="Reset Password" style="color: var(--color-warning);">
              <i class="fas fa-key"></i>
            </button>
          ` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

function showAddUserModal() {
  if (currentUser.role !== 'Admin') {
    showToast('You do not have permission to add users', 'error');
    return;
  }
  
  showUserFormModal();
}

function showUserFormModal(userId = null) {
  const users = dataStore.users || applicationData.users;
  const user = userId ? users.find(u => u.id === userId) : null;
  const isEditing = !!user;
  
  const modalContent = `
    <form id="userForm" class="user-form">
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Full Name *</label>
          <input type="text" id="userName" class="form-control" required 
                 value="${user ? user.name : ''}" 
                 placeholder="Enter full name">
        </div>
        <div class="form-group">
          <label class="form-label">Email Address *</label>
          <input type="email" id="userEmail" class="form-control" required 
                 value="${user ? user.email : ''}" 
                 placeholder="Enter email address">
        </div>
        <div class="form-group">
          <label class="form-label">Role *</label>
          <select id="userRole" class="form-control" required>
            <option value="">Select Role</option>
            <option value="Admin" ${user && user.role === 'Admin' ? 'selected' : ''}>Administrator</option>
            <option value="Manager" ${user && user.role === 'Manager' ? 'selected' : ''}>Manager</option>
            <option value="Staff" ${user && user.role === 'Staff' ? 'selected' : ''}>Staff</option>
          </select>
        </div>
        ${!isEditing ? `
          <div class="form-group">
            <label class="form-label">Password *</label>
            <input type="password" id="userPassword" class="form-control" required 
                   placeholder="Enter password" minlength="6">
          </div>
          <div class="form-group">
            <label class="form-label">Confirm Password *</label>
            <input type="password" id="userConfirmPassword" class="form-control" required 
                   placeholder="Confirm password">
          </div>
        ` : ''}
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" id="userActive" ${!user || user.active ? 'checked' : ''}>
            Active User
          </label>
        </div>
      </div>
      <div class="form-group">
        <small class="form-help">* Required fields</small>
      </div>
    </form>
  `;
  
  showCustomModal(
    isEditing ? 'Edit User' : 'Add New User',
    modalContent,
    [
      { text: 'Cancel', class: 'btn--secondary', onclick: 'hideCustomModal()' },
      { text: isEditing ? 'Update User' : 'Add User', class: 'btn--primary', onclick: `handleUserSubmit(${userId})` }
    ]
  );
  
  // Focus on name input
  setTimeout(() => document.getElementById('userName').focus(), 100);
}

function handleUserSubmit(userId = null) {
  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim().toLowerCase();
  const role = document.getElementById('userRole').value;
  const active = document.getElementById('userActive').checked;
  
  // Validation
  if (!name || name.length < 2) {
    showToast('Name must be at least 2 characters', 'error');
    return;
  }
  
  if (!email || !isValidEmail(email)) {
    showToast('Please enter a valid email address', 'error');
    return;
  }
  
  if (!role) {
    showToast('Please select a role', 'error');
    return;
  }
  
  const users = dataStore.users || applicationData.users;
  
  // Check for duplicate email
  const existingUser = users.find(u => 
    u.email === email && (!userId || u.id !== userId)
  );
  
  if (existingUser) {
    showToast('Email address is already registered', 'error');
    return;
  }
  
  if (userId) {
    // Update existing user
    const user = users.find(u => u.id === userId);
    if (user) {
      const oldRole = user.role;
      user.name = name;
      user.email = email;
      user.role = role;
      user.active = active;
      
      // Update user in dataStore as well
      if (dataStore.users) {
        const dataStoreUser = dataStore.users.find(u => u.id === userId);
        if (dataStoreUser) {
          dataStoreUser.name = name;
          dataStoreUser.email = email;
          dataStoreUser.role = role;
          dataStoreUser.active = active;
        }
      }
      
      showToast('User updated successfully', 'success');
      addActivity(currentUser.name, 'Updated user', `${name} (${email}) - Role: ${oldRole} → ${role}`, 'user_update');
      
      // Update current user info if editing self
      if (userId === currentUser.id) {
        currentUser.name = name;
        currentUser.email = email;
        currentUser.role = role;
        document.querySelector('.user-name').textContent = name;
        document.querySelector('.user-role').textContent = role;
      }
    }
  } else {
    // Add new user - validate password
    const password = document.getElementById('userPassword').value;
    const confirmPassword = document.getElementById('userConfirmPassword').value;
    
    if (!password || password.length < 6) {
      showToast('Password must be at least 6 characters', 'error');
      return;
    }
    
    if (password !== confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }
    
    const newUser = {
      id: Date.now(),
      name,
      email,
      role,
      password,
      active,
      created_date: new Date().toISOString().substring(0, 10),
      last_login: null
    };
    
    applicationData.users.push(newUser);
    if (dataStore.users) {
      dataStore.users.push({ ...newUser });
    }
    
    showToast('User added successfully', 'success');
    addActivity(currentUser.name, 'Added new user', `${name} (${email}) - Role: ${role}`, 'user_create');
  }
  
  hideCustomModal();
  renderUsersTable();
  updateKPIs();
}

function editUser(userId) {
  if (currentUser.role !== 'Admin') {
    showToast('You do not have permission to edit users', 'error');
    return;
  }
  
  showUserFormModal(userId);
}

function toggleUserStatus(userId) {
  if (currentUser.role !== 'Admin') {
    showToast('You do not have permission to modify user status', 'error');
    return;
  }
  
  if (userId === currentUser.id) {
    showToast('You cannot deactivate your own account', 'error');
    return;
  }
  
  const users = dataStore.users || applicationData.users;
  const user = users.find(u => u.id === userId);
  if (!user) return;
  
  const action = user.active ? 'deactivate' : 'activate';
  const confirmMessage = `Are you sure you want to ${action} ${user.name}?`;
  
  if (!confirm(confirmMessage)) return;
  
  user.active = !user.active;
  
  // Update in dataStore as well
  if (dataStore.users) {
    const dataStoreUser = dataStore.users.find(u => u.id === userId);
    if (dataStoreUser) {
      dataStoreUser.active = user.active;
    }
  }
  
  showToast(`User ${user.active ? 'activated' : 'deactivated'} successfully`, 'success');
  addActivity(currentUser.name, `${user.active ? 'Activated' : 'Deactivated'} user`, user.name, 'user_status');
  
  renderUsersTable();
  updateKPIs();
}

function resetUserPassword(userId) {
  if (currentUser.role !== 'Admin') {
    showToast('You do not have permission to reset passwords', 'error');
    return;
  }
  
  const users = dataStore.users || applicationData.users;
  const user = users.find(u => u.id === userId);
  if (!user) return;
  
  const newPassword = prompt(`Enter new password for ${user.name}:`);
  if (!newPassword) return;
  
  if (newPassword.length < 6) {
    showToast('Password must be at least 6 characters', 'error');
    return;
  }
  
  user.password = newPassword;
  
  // Update in dataStore as well
  if (dataStore.users) {
    const dataStoreUser = dataStore.users.find(u => u.id === userId);
    if (dataStoreUser) {
      dataStoreUser.password = newPassword;
    }
  }

// Add bulk operations button to products section header
function addBulkOperationsButton() {
  const productsSection = document.getElementById('productsSection');
  const headerActions = productsSection.querySelector('.header-actions');
  
  if (headerActions && !headerActions.querySelector('.bulk-operations-btn') && hasPermission('bulk_operations')) {
    const bulkBtn = document.createElement('button');
    bulkBtn.className = 'btn btn--outline bulk-operations-btn';
    bulkBtn.innerHTML = '<i class="fas fa-tasks"></i> Bulk Operations';
    bulkBtn.onclick = showBulkOperationsModal;
    headerActions.appendChild(bulkBtn);
  }
}

// Update reports summary
function updateReportsSummary() {
  const products = dataStore.products || applicationData.products;
  const outOfStockCount = products.filter(p => p.current_stock === 0).length;
  const lowStockCount = products.filter(p => p.current_stock < p.min_stock && p.current_stock > 0).length;
  const overStockCount = products.filter(p => p.current_stock > p.max_stock).length;
  
  const totalValue = products.reduce((sum, p) => sum + (p.current_stock * p.price), 0);
  const totalRevenue = applicationData.kpis.monthly_sales;
  
  // Update summary cards if they exist
  const criticalEl = document.getElementById('criticalAlertsCount');
  const warningEl = document.getElementById('warningAlertsCount');
  const revenueEl = document.getElementById('totalRevenueAmount');
  const inventoryEl = document.getElementById('totalInventoryValue');
  
  if (criticalEl) criticalEl.textContent = outOfStockCount;
  if (warningEl) warningEl.textContent = lowStockCount + overStockCount;
  if (revenueEl) revenueEl.textContent = `$${totalRevenue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  if (inventoryEl) inventoryEl.textContent = `$${totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

// Call update reports summary when loading reports
function loadReports() {
  updateReportsSummary();
  loadLowStockReport();
  loadCategorySummary();
  loadStockMovementReport();
  loadUserActivityReport();
}

// Note: This function is already defined above, removing duplicate
  
  showToast('Password reset successfully', 'success');
  addActivity(currentUser.name, 'Reset password', `Password reset for ${user.name}`, 'user_password_reset');
}

// Page indicator functions
function addPageIndicator(sectionName) {
  const indicator = document.createElement('div');
  indicator.id = 'pageNavigationIndicator';
  indicator.className = 'page-navigation-indicator';
  
  const pageTypes = {
    dashboard: 'Analytics Dashboard',
    products: 'Inventory Management', 
    categories: 'Category Management',
    reports: 'Detailed Reports',
    users: 'User Management',
    settings: 'System Settings'
  };
  
  indicator.innerHTML = `
    <i class="fas fa-map-marker-alt"></i>
    Currently viewing: ${pageTypes[sectionName] || sectionName}
  `;
  
  document.body.appendChild(indicator);
}

function clearPageIndicators() {
  const existing = document.getElementById('pageNavigationIndicator');
  if (existing) {
    existing.remove();
  }
}

function addAuthenticationIndicator() {
  const indicator = document.createElement('div');
  indicator.id = 'authenticationIndicator';
  indicator.style.cssText = `
    position: fixed;
    top: var(--space-20);
    right: var(--space-20);
    background: var(--color-success);
    color: var(--color-white);
    padding: var(--space-6) var(--space-12);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    z-index: 1001;
    display: flex;
    align-items: center;
    gap: var(--space-6);
    box-shadow: var(--shadow-md);
  `;
  
  indicator.innerHTML = `
    <i class="fas fa-shield-alt"></i>
    Authenticated as ${currentUser.name}
  `;
  
  document.body.appendChild(indicator);
  
  // Auto-hide after 3 seconds
  setTimeout(() => {
    if (indicator.parentNode) {
      indicator.style.opacity = '0.3';
    }
  }, 3000);
}

function clearAuthenticationIndicator() {
  const existing = document.getElementById('authenticationIndicator');
  if (existing) {
    existing.remove();
  }
}

// Enhanced page separation functions
function enhancePageSeparation() {
  // Add visual separators between different functional areas
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    const sectionType = section.id.replace('Section', '');
    const badge = document.createElement('div');
    badge.className = 'section-type-badge';
    badge.style.position = 'relative';
    badge.style.display = 'none';
    
    const types = {
      dashboard: 'analytics',
      products: 'inventory',
      categories: 'management',
      reports: 'analytics',
      users: 'management', 
      settings: 'management'
    };
    
    badge.classList.add(types[sectionType] || 'management');
    badge.textContent = types[sectionType] || 'management';
    
    section.style.position = 'relative';
    section.appendChild(badge);
  });
}

// Initialize page separation enhancements
document.addEventListener('DOMContentLoaded', function() {
  enhancePageSeparation();
});

// Make functions available globally for onclick handlers
window.editProduct = editProduct;
window.adjustStock = adjustStock;
window.deleteProduct = deleteProduct;
window.viewProduct = viewProduct;
window.showStockAdjustment = showStockAdjustment;
window.showAuthError = showAuthError;
window.editCategory = editCategory;
window.deleteCategory = deleteCategory;
window.viewCategoryDetails = viewCategoryDetails;
window.filterProductsByCategory = filterProductsByCategory;
window.editUser = editUser;
window.toggleUserStatus = toggleUserStatus;
window.resetUserPassword = resetUserPassword;
window.hideCustomModal = hideCustomModal;
window.handleCategorySubmit = handleCategorySubmit;
window.handleUserSubmit = handleUserSubmit;
window.exportData = exportData;
window.showBulkOperationsModal = showBulkOperationsModal;
window.showBulkStockAdjustment = showBulkStockAdjustment;
window.adjustStockToMin = adjustStockToMin;
window.adjustStockToOptimal = adjustStockToOptimal;
window.showLowStockReorder = showLowStockReorder;
window.exportReorderList = exportReorderList;
window.saveSystemPreferences = saveSystemPreferences;
window.changePassword = changePassword;
window.logoutAllSessions = logoutAllSessions;