#!/usr/bin/env python3
"""
Backend API Testing Suite
Tests all backend endpoints including the new placeholder endpoint
"""

import requests
import json
import sys
from datetime import datetime
import xml.etree.ElementTree as ET

# Get backend URL from environment
BACKEND_URL = "https://nav-hero-mobile-fix.preview.emergentagent.com/api"

def test_placeholder_endpoint():
    """Test the new placeholder endpoint with various scenarios"""
    print("\n=== Testing Placeholder Endpoint ===")
    
    # Test 1: Basic placeholder request /api/placeholder/300/200
    print("\n1. Testing /api/placeholder/300/200")
    try:
        response = requests.get(f"{BACKEND_URL}/placeholder/300/200")
        print(f"Status Code: {response.status_code}")
        print(f"Content-Type: {response.headers.get('Content-Type')}")
        
        if response.status_code == 200:
            if response.headers.get('Content-Type') == 'image/svg+xml':
                svg_content = response.text
                print("✅ Correct Content-Type: image/svg+xml")
                
                # Parse SVG and check dimensions
                try:
                    root = ET.fromstring(svg_content)
                    width = root.get('width')
                    height = root.get('height')
                    print(f"SVG width: {width}, height: {height}")
                    
                    if width == '300' and height == '200':
                        print("✅ Correct dimensions in SVG")
                    else:
                        print(f"❌ Wrong dimensions: expected 300x200, got {width}x{height}")
                    
                    # Check if label contains 300x200
                    text_elements = root.findall('.//{http://www.w3.org/2000/svg}text')
                    label_found = False
                    for text_elem in text_elements:
                        if text_elem.text and '300x200' in text_elem.text:
                            print(f"✅ Found correct label: {text_elem.text}")
                            label_found = True
                            break
                    
                    if not label_found:
                        print("❌ Label '300x200' not found in SVG")
                        
                except ET.ParseError as e:
                    print(f"❌ Invalid SVG format: {e}")
            else:
                print(f"❌ Wrong Content-Type: {response.headers.get('Content-Type')}")
        else:
            print(f"❌ Request failed with status {response.status_code}")
            print(f"Response: {response.text}")
            
    except Exception as e:
        print(f"❌ Error testing placeholder endpoint: {e}")
    
    # Test 2: Placeholder with custom text /api/placeholder/120/60?text=Logo
    print("\n2. Testing /api/placeholder/120/60?text=Logo")
    try:
        response = requests.get(f"{BACKEND_URL}/placeholder/120/60?text=Logo")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            svg_content = response.text
            root = ET.fromstring(svg_content)
            width = root.get('width')
            height = root.get('height')
            
            print(f"SVG dimensions: {width}x{height}")
            if width == '120' and height == '60':
                print("✅ Correct dimensions")
            else:
                print(f"❌ Wrong dimensions: expected 120x60, got {width}x{height}")
            
            # Check for custom text "Logo"
            text_elements = root.findall('.//{http://www.w3.org/2000/svg}text')
            logo_found = False
            for text_elem in text_elements:
                if text_elem.text and 'Logo' in text_elem.text:
                    print(f"✅ Found custom text: {text_elem.text}")
                    logo_found = True
                    break
            
            if not logo_found:
                print("❌ Custom text 'Logo' not found in SVG")
        else:
            print(f"❌ Request failed with status {response.status_code}")
            
    except Exception as e:
        print(f"❌ Error testing custom text: {e}")
    
    # Test 3: Large dimensions clamping /api/placeholder/5000/5000
    print("\n3. Testing /api/placeholder/5000/5000 (clamping test)")
    try:
        response = requests.get(f"{BACKEND_URL}/placeholder/5000/5000")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            svg_content = response.text
            root = ET.fromstring(svg_content)
            width = root.get('width')
            height = root.get('height')
            
            print(f"SVG dimensions: {width}x{height}")
            if width == '4000' and height == '4000':
                print("✅ Dimensions correctly clamped to 4000x4000")
            else:
                print(f"❌ Clamping failed: expected 4000x4000, got {width}x{height}")
        else:
            print(f"❌ Request failed with status {response.status_code}")
            
    except Exception as e:
        print(f"❌ Error testing clamping: {e}")
    
    # Test 4: CORS headers
    print("\n4. Testing CORS headers")
    try:
        response = requests.get(f"{BACKEND_URL}/placeholder/100/100")
        cors_header = response.headers.get('Access-Control-Allow-Origin')
        print(f"CORS Allow-Origin: {cors_header}")
        
        if cors_header == '*':
            print("✅ CORS allows all origins")
        else:
            print(f"❌ CORS header unexpected: {cors_header}")
            
    except Exception as e:
        print(f"❌ Error testing CORS: {e}")

def test_existing_endpoints():
    """Test existing endpoints to ensure they still work"""
    print("\n=== Testing Existing Endpoints ===")
    
    # Test 5: GET /api/ returns {"message":"Hello World"}
    print("\n5. Testing GET /api/")
    try:
        response = requests.get(f"{BACKEND_URL}/")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {data}")
            
            if data.get('message') == 'Hello World':
                print("✅ Root endpoint returns correct message")
            else:
                print(f"❌ Wrong message: expected 'Hello World', got '{data.get('message')}'")
        else:
            print(f"❌ Request failed with status {response.status_code}")
            
    except Exception as e:
        print(f"❌ Error testing root endpoint: {e}")
    
    # Test 6: POST /api/status and GET /api/status
    print("\n6. Testing POST and GET /api/status")
    try:
        # First, POST a status check
        post_data = {"client_name": "tester"}
        response = requests.post(f"{BACKEND_URL}/status", json=post_data)
        print(f"POST Status Code: {response.status_code}")
        
        if response.status_code == 200:
            post_result = response.json()
            print(f"POST Response: {post_result}")
            
            # Check required fields
            required_fields = ['id', 'client_name', 'timestamp']
            missing_fields = [field for field in required_fields if field not in post_result]
            
            if not missing_fields:
                print("✅ POST response contains all required fields")
                
                if post_result.get('client_name') == 'tester':
                    print("✅ Client name matches")
                else:
                    print(f"❌ Wrong client name: expected 'tester', got '{post_result.get('client_name')}'")
            else:
                print(f"❌ Missing fields in POST response: {missing_fields}")
            
            # Now test GET /api/status
            get_response = requests.get(f"{BACKEND_URL}/status")
            print(f"GET Status Code: {get_response.status_code}")
            
            if get_response.status_code == 200:
                get_result = get_response.json()
                print(f"GET Response length: {len(get_result)} items")
                
                if isinstance(get_result, list):
                    print("✅ GET returns a list")
                    
                    # Check if our posted item is in the list
                    posted_id = post_result.get('id')
                    found_item = None
                    for item in get_result:
                        if item.get('id') == posted_id:
                            found_item = item
                            break
                    
                    if found_item:
                        print("✅ Posted item found in GET response")
                    else:
                        print("❌ Posted item not found in GET response")
                else:
                    print("❌ GET response is not a list")
            else:
                print(f"❌ GET request failed with status {get_response.status_code}")
                
        else:
            print(f"❌ POST request failed with status {response.status_code}")
            print(f"Response: {response.text}")
            
    except Exception as e:
        print(f"❌ Error testing status endpoints: {e}")
        # Check if this is a MongoDB connection issue
        if "connection" in str(e).lower() or "mongo" in str(e).lower():
            print("⚠️  This appears to be a MongoDB connection issue")

def main():
    """Run all tests"""
    print("Starting Backend API Tests")
    print(f"Testing against: {BACKEND_URL}")
    
    test_placeholder_endpoint()
    test_existing_endpoints()
    
    print("\n=== Test Summary ===")
    print("All tests completed. Check individual test results above.")

if __name__ == "__main__":
    main()